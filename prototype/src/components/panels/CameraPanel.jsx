import React, { useState, useEffect, useRef } from 'react';


// This data would likely be managed by a global state or passed as props in a real app.
const simulatedShoes = [
    { name: "Air Jordan 1 Retro High", brand: "Jordan", color: "Red/Black", year: "1985", image: "https://placehold.co/120x80/DC3545/F7F7F7?text=AJ1+Bred" },
    { name: "Nike Dunk Low Panda", brand: "Nike", color: "Black/White", year: "2021", image: "https://placehold.co/120x80/3D3D3D/F7F7F7?text=Dunk+Panda" },
    { name: "Yeezy Boost 350 V2", brand: "Adidas", color: "Cream White", year: "2017", image: "https://placehold.co/120x80/E1E1E1/3D3D3D?text=Yeezy+Cream" },
    { name: "New Balance 550", brand: "New Balance", color: "White/Green", year: "2020", image: "https://placehold.co/120x80/28A745/F7F7F7?text=NB+Green" }
];

export default function CameraPanel({ showStatusMessage, onAddComplete }) {
    const [cameraState, setCameraState] = useState('initial');
    const [imageSrc, setImageSrc] = useState(null);
    const [identifiedShoe, setIdentifiedShoe] = useState(null);
    const [nickname, setNickname] = useState('');
    const [location, setLocation] = useState('');
    
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);
    const streamRef = useRef(null);

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };
    
    useEffect(() => {
        return () => stopCamera();
    }, []);

    const startScanWorkflow = async () => {
        setCameraState('cameraActive');
        setImageSrc(null);
        setIdentifiedShoe(null);
        setNickname('');
        setLocation('');

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error("Error accessing camera: ", err);
            setCameraState('initial');
            alert('Camera access denied or unavailable. Please use "Upload Photo".');
        }
    };

    const handleTakePhoto = () => {
        if (videoRef.current && streamRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
            const dataUrl = canvas.toDataURL('image/jpeg');
            setImageSrc(dataUrl);
            setCameraState('photoTaken');
            stopCamera();
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
                setCameraState('photoTaken');
                stopCamera();
            };
            reader.readAsDataURL(file);
        }
    };

    const handleScanShoe = () => {
        if (!imageSrc) {
            alert('Please take or upload a photo first.');
            return;
        }
        setCameraState('scanning');
        setTimeout(() => {
            const randomShoe = simulatedShoes[Math.floor(Math.random() * simulatedShoes.length)];
            setIdentifiedShoe(randomShoe);
            setCameraState('scanComplete');
        }, 2000);
    };

    const handleAddToCollection = (collectionType) => {
        const onAdd = onAddComplete || (() => {});
        const showMessage = showStatusMessage || alert;

        if (!nickname) {
            alert('Please add a nickname for this shoe!');
            return;
        }
        if (collectionType === 'wild' && !location) {
            alert('Please enter a location for this "Wild Collection" finding!');
            return;
        }
        
        showMessage(`Added "${nickname}" to your collection!`);
        resetCameraPanel();
        onAdd();
    };

    const resetCameraPanel = () => {
        stopCamera();
        setCameraState('initial');
        setImageSrc(null);
        setIdentifiedShoe(null);
        setNickname('');
        setLocation('');
        if(fileInput-inputRef.current) fileInputRef.current.value = "";
    };

    return (
        <>
            <div className="cp-container">
                <h2 className="cp-header">Wild Shoe Scan</h2>

                <div className="cp-preview" style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {cameraState === 'cameraActive' && <video ref={videoRef} autoPlay playsInline></video>}
                    {cameraState === 'initial' && <div className="cp-placeholder-text">Tap "Start Scan" to activate<br />your camera and find shoes!</div>}
                </div>

                <div className="cp-controls">
                    {cameraState === 'initial' && (
                        <button className="cp-btn cp-btn--start" onClick={startScanWorkflow}>Start Scan</button>
                    )}
                    
                    {cameraState === 'cameraActive' && (
                        <div className="cp-button-row">
                            <button className="cp-btn cp-btn--action" onClick={handleTakePhoto}>Take Photo</button>
                            <button className="cp-btn cp-btn--action" onClick={() => fileInputRef.current.click()}>Upload Photo</button>
                            <input type="file" ref={fileInputRef} accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
                        </div>
                    )}

                    {cameraState === 'photoTaken' && (
                        <>
                            <div className="cp-button-row">
                                <button className="cp-btn cp-btn--action" onClick={resetCameraPanel}>Retake</button>
                                <button className="cp-btn cp-btn--scan" onClick={handleScanShoe}>Scan Shoe</button>
                            </div>
                        </>
                    )}

                    {cameraState === 'scanning' && (
                        <button className="cp-btn cp-btn--loading" disabled>
                            <span className="cp-spinner"></span>Scanning...
                        </button>
                    )}

                    {cameraState === 'scanComplete' && identifiedShoe && (
                        <>
                           <div className="cp-details-card">
                                <div className="shoe-image" style={{ backgroundImage: `url('${identifiedShoe.image}')` }}></div>
                                <h3 className="shoe-name">{identifiedShoe.name}</h3>
                                <p className="shoe-info">{`Brand: ${identifiedShoe.brand} | Color: ${identifiedShoe.color}`}</p>
                            </div>
                            <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} className="cp-input" placeholder="Add Nickname (Required)" />
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="cp-input" placeholder="Enter Location (e.g., Park)" />
                            <div className="cp-button-row">
                                <button className="cp-btn cp-btn--add-my" onClick={() => handleAddToCollection('my')}>Add to My Collection</button>
                                <button className="cp-btn cp-btn--add-wild" onClick={() => handleAddToCollection('wild')}>Add to Wild Collection</button>
                            </div>
                             <button className="cp-btn cp-btn--action" onClick={resetCameraPanel}>Cancel</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
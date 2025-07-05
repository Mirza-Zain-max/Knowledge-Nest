import React, { useState } from "react";

const WebPdf = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [password, setPassword] = useState("");
    const correctPassword = "1234";
    
    const handleDownload = () => {
        if (password === correctPassword) {
            window.notify("Download Started!","success");
            window.location.href = "yourfile.pdf"; // Set the file path here
        } else {
            window.notify("Incorrect password! Send 100rs to 9876543210 to get access.","info");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Web Development Notes</h2>
            <p className="text-red-500 text-center font-mono "> جن ویڈیوز میں نوٹس کی ضرورت ہے، انہی کے نوٹس یہاں دیے گئے ہیں</p>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-md">
                    <h3 className="text-lg font-bold text-center mb-3">All Notes List</h3>
                    {[
                        "Unit 1 HTML", "Unit 2 CSS", "Unit 3 CSS3", "Unit 4 Bootstrap", "Unit 5 tailwind", "Unit 6 SCSS", "Unit 7 JavaScript", "Unit 8 React", "Unit 9 Firebase"
                    ].map((unit, index) => (
                        <div key={index} className="border-b">
                            <button 
                                className="w-full text-left p-3 bg-gray-200" 
                                onClick={() => setIsOpen(isOpen === index ? null : index)}
                            >
                                {unit}
                            </button>
                            {isOpen === index && index === 0 && (
                                <div className="p-3">
                                    <p>HTML</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 1 && (
                                <div className="p-3">
                                    <p>CSS</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 2 && (
                                <div className="p-3">
                                    <p>CSS 3</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 3 && (
                                <div className="p-3">
                                    <p>Bootstrap</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 4 && (
                                <div className="p-3">
                                    <p>Tailwind</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}

                            {isOpen === index && index === 5 && (
                                <div className="p-3">
                                    <p>SCSS</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 6 && (
                                <div className="p-3">
                                    <p>JavaScript</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 7 && (
                                <div className="p-3">
                                    <p>React</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                            {isOpen === index && index === 8 && (
                                <div className="p-3">
                                    <p>React</p>
                                    <input 
                                        type="password" 
                                        placeholder="Enter password" 
                                        className="mt-3 p-2 border rounded w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button 
                                        onClick={handleDownload} 
                                        className="mt-3 px-4 py-2 bg-green-500 text-white rounded w-full"
                                    >
                                        Download Notes
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                    <div className="w-full h-64 bg-white border flex items-center justify-center">
                        <p className="text-gray-500">Selected notes will appear here</p>
                    </div>
                    <button 
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
                        disabled={!password}
                        onClick={handleDownload}
                    >
                        Download Notes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebPdf;


import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "bgMEvrd2E",
  isLocalVideo = false,
  localVideoSrc = "/assets/vid/dfp-video-001.mp4"
}) => {
  if (isLocalVideo) {
    return (
      <>
        {isVideoOpen && (
          <div 
            className="fixed inset-0 w-full h-full" 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 9999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="text-white hover:text-gray-300 z-10"
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '32px',
                right: '32px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <video 
              className="object-contain"
              controls
              autoPlay
              src={localVideoSrc}
              style={{
                maxWidth: '90vw', 
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;

body {
    margin: 0;
    padding: 0;
}

.pdf-container {
    position: relative;
    padding-bottom: 60%;
    /* Set the aspect ratio for the PDF viewer */
    height: 0;
    margin: 20px;
}

.pdf-viewer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.pdf-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    margin: 20px;
}

.pdf-download {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
}

.pdf-download:hover {
    background-color: #2980b9;
}

@media only screen and (max-width: 768px) {
    .pdf-container {
        margin: 10px;
    }
}

@media only screen and (max-width: 480px) {
    .pdf-container {
        padding-bottom: 80%;
        margin: 5px;
    }

    .pdf-controls {
        margin: 10px;
    }

    .pdf-download {
        font-size: 14px;
        padding: 8px 16px;
    }
}

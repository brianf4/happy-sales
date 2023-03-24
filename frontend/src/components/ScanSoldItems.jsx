import React, { useEffect } from "react";
import Quagga from "quagga";

function ScanSoldItems(props) {
  

  useEffect(() => {
    Quagga.init({
      "inputStream": {
        "type": "LiveStream",
        "target": document.querySelector('#ScanSoldItems'),
        "constraints": {
          // "width": "100%",
          "height": "100%",
          "facingMode": "environment",
          "aspectRatio": { "min": 1, "max": 2 }
        },
      },
      "locator": {
        "patchSize": "medium",
         "halfSample": true
      },
      "numOfWorkers": 4,
      "frequency": 20,
      "decoder": {
        "readers": ['code_128_reader']
      },
      
      "locate": true
    }, function(err) {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop()
      }
    });

    //detecting boxes on stream
    Quagga.onProcessed(result => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });

    Quagga.onDetected(detected);
  }, []);

  function detected(result) {
    props.onDetected(result.codeResult.code);
    console.log(result.codeResult)
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #ScanSoldItems.viewport
    <div id="ScanSoldItems" className="viewport" />
  );
}
export default ScanSoldItems
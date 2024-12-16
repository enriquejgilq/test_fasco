import CountdownTimer from '@/app/components/molecules/CountdownTimer'
import { Button } from '@mui/material'
import React from 'react'


export const Deals = () => {
    return (
        <section id="deals" className="page flex justify-center    ">
            <div className="w-[1281px]">
                <div className="flex flex-row justify-between gap-[19px] rounded-[10px] mt-10">

                   
                    <div className="  rounded-[10px] w-1/2">
                        <div className="flex flex-col   w-full  ">
                            <p className="text-[59px]">Deals Of The Month</p>
                            <div className="flex w-[436px] flex-col items-start ">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                                </p>
                                <Button
                                    sx={{
                                        width: '207px',
                                        height: '56px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    }}
                                >
                                    Buy Now
                                </Button>
                                <p> Hurry, Before It’s Too Late!</p>
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>

                  
                    <div className="flex flex-col bg-red-500 w-1/2 p-5">
                        <p className="text-[59px]">Deals Of The Month</p>
                        <div className="flex w-[436px]">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
/*
const handleUpload = async ( img, id,key) => {
    //Añadir props para usar funcion de manera global 
    
    //TODO implement upload file
    onLoading() 
    const base64Data = file.split(',')[1];
    const mimeType = file.match(/^data:(.*);base64/)?.[1] || 'application/octet-stream';

     const blob = atob(base64Data)
      .split('')
      .map(char => char.charCodeAt(0))
      .reduce((acc, curr) => acc + String.fromCharCode(curr), '');

    const arrayBuffer = new Uint8Array(blob.length);
    for (let i = 0; i < blob.length; i++) {
      arrayBuffer[i] = blob.charCodeAt(i);
    }

    const fileBlob = new Blob([arrayBuffer], { type: mimeType });

     const params = {
      Bucket: 'flety',  
      Key: key, //`profile-photos/id_asdasd4${Date.now()}.png`,  
      Body: fileBlob,
      ContentType: mimeType,  
    };

    
    const uploadResult = await s3.upload(params).promise();

    console.log('Archivo subido con éxito:', uploadResult.Location);
    
    
    setUrlFile({ type: TypeFile.PROFILE, url: uploadResult.Location });
    if(uploadResult){
       
       //onNext()
    }

  };*/
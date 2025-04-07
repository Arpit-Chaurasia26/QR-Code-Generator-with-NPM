/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
const input_url = await input({ message: 'Enter the url: ' });

import qr from "qr-image";
import fs from 'fs';

var qr_png = qr.image(input_url, { type: 'png' });// qr image stream generated from text 'I love QR!' in png format is saved in variable qr_png.
qr_png.pipe(fs.createWriteStream('qr.png'));// createWriteStream creates a file with name 'i_love_qr.png' and qr_png.pipe() function writes qr image stream into it. Simply it creates a qr image file.

fs.writeFile("url.txt", input_url, (err)=>{
  if(err) throw err;
  console.log("File has been saved successfully!")
});
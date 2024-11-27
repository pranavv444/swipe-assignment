import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_GOOGLE_API_KEY || '');
const parseGeminiResponse = (responseText: string): any => {
  try {
    const jsonString = responseText.replace(/```json\n|\n```/g, '');
    
    const jsonObject = JSON.parse(jsonString);
    
    return jsonObject;
  } catch (error) {
    console.error('Error parsing Gemini response:', error);
    throw error;
  }
};

export const extractDataFromImage = async (file: File): Promise<any> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const imageData = await file.arrayBuffer();
    const uint8Array = new Uint8Array(imageData);
    let binary = '';
    for (let i = 0; i < uint8Array.length; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }
    const base64Image = btoa(binary);
    
    const response = await model.generateContent([
      
      'Extract the following information from this invoice image in JSON format: serial number (invoice number or unique identifier), customer name, customer phone number, customer address, product details (name, quantity, unit price, GST percentage, GST amount), discount percentage, tax percentage, tax amount, making charges, debit card charges, shipping charges, taxable amount, CGST, SGST, total amount, date, and bank details (bank name, account number, IFSC code, branch, beneficiary name, UPI). Format the response as valid JSON.',
      {
        inlineData: {
          mimeType: file.type,
          data: base64Image,
        },
      },
    ]);

    const resultText = await response.response.text();
    console.log('API Response:', resultText); // Log the response text
    const result = parseGeminiResponse(resultText); // Parse the response text
    console.log('Parsed Result:', result); // Log the parsed result
    return result;
  } catch (error) {
    console.error('Error extracting data from image:', error);
    throw error;
  }
};



export const extractDataFromPDF = async (file: File): Promise<any> => {

  return extractDataFromImage(file); 
};

export const processExcelData = async (data: any[]): Promise<any> => {
  try {
    // Assuming data is an array of objects representing rows in the Excel sheet
    return data;
  } catch (error) {
    console.error('Error processing Excel data:', error);
    throw error;
  }
};
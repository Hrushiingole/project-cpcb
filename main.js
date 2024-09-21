import request from 'request';
var options = {
  'method': 'POST',
  'url': 'https://airquality.cpcb.gov.in/caaqms/fetch_table_data',
  'headers': {
    'accept': 'q=0.8;application/json;q=0.9',
    'accept-language': 'en-US,en;q=0.9,en-IN;q=0.8,de-DE;q=0.7,de;q=0.6,fr;q=0.5',
    'content-type': 'text/plain',
    'cookie': '_ga=GA1.3.2000861744.1721495335; ccr_captcha="0eFxZMgm+0J/sDrcPYZPHFJEWX+4ZJioGlHvs5+c8Vqg/8nDUwFRUcXpwBOJFlHdpaYx0gDhb4Glkk8JzSzPShuEHi8xF1hdeYbL+p/AbHhK/Fatn2jOpQo58xk9x9kO0BOCRxdL+3ijWsAnwQw8nzOPeSAQd2COE+kjwnLy1w6jZHtOZ3DQntxNEkESNbtgdoPQCkvvXK47jniRCovB9KFW9DCCSfWAg+o1AAotax9Zj4xzN3t81/qmuMngTRHWKgpJW+MXTy/J1Rl1nwI63Q=="; _gid=GA1.3.385057462.1726505085; _ga_40XB5TDTEW=GS1.3.1726505086.10.0.1726505086.0.0.0; ccr_public="5cC0eZL7wAK2G3SUyI4eaSEYpttvIMjMCQ0UJlCiC/6nBXjkOFnhWSBolnpXEIYH4rwsQmqJqryikFQhQV78jbuyAaNuDe7GPpMBHGsu692ciaDcPMg4UrGPY/fwDVwKcdGF9hM1w/mW85UO/dFEOpKR7BSSD0qftuHOWxJ/oe+e93spHOMzFXKHoGuUBJ4TvX7k/uZaGDsBVOdmCY4aR3A6IQQYfInhHeJ9HVKfQUcfa0TeiTU2F8bhcPITiGPH3HlFlvjk9R674ePKUTYwMows1Sd0fLs35pgmvEygcNpEsc0bVnSzeGVLBbSCTVFhjJOejk3T1ev2CPqfsQkCLenj/diRzbjKjx87K4ir65g="; _xsrf=4052bcf5de6d4e01bdac58ba6a10cfe9',
    'origin': 'https://airquality.cpcb.gov.in',
    'priority': 'u=1, i',
    'referer': 'https://airquality.cpcb.gov.in/ccr/',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
  },
  body: 'eyJkcmF3IjoxLCJjb2x1bW5zIjpbeyJkYXRhIjowLCJuYW1lIjoiIiwic2VhcmNoYWJsZSI6dHJ1ZSwib3JkZXJhYmxlIjpmYWxzZSwic2VhcmNoIjp7InZhbHVlIjoiIiwicmVnZXgiOmZhbHNlfX1dLCJvcmRlciI6W10sInN0YXJ0IjowLCJsZW5ndGgiOjEwLCJzZWFyY2giOnsidmFsdWUiOiIiLCJyZWdleCI6ZmFsc2V9LCJmaWx0ZXJzVG9BcHBseSI6eyJwYXJhbWV0ZXJfbGlzdCI6W3siaWQiOjAsIml0ZW1OYW1lIjoiUE0yLjUiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTkzIn0seyJpZCI6MSwiaXRlbU5hbWUiOiJQTTEwIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIxNSJ9LHsiaWQiOjIsIml0ZW1OYW1lIjoiTk8iLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjI2In0seyJpZCI6MywiaXRlbU5hbWUiOiJOTzIiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTk0In0seyJpZCI6NCwiaXRlbU5hbWUiOiJOT3giLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjI1In0seyJpZCI6NSwiaXRlbU5hbWUiOiJOSDMiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMzExIn0seyJpZCI6NiwiaXRlbU5hbWUiOiJTTzIiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMzEyIn0seyJpZCI6NywiaXRlbU5hbWUiOiJDTyIsIml0ZW1WYWx1ZSI6InBhcmFtZXRlcl8yMDMifSx7ImlkIjo4LCJpdGVtTmFtZSI6Ik96b25lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIyMiJ9LHsiaWQiOjksIml0ZW1OYW1lIjoiQmVuemVuZSIsIml0ZW1WYWx1ZSI6InBhcmFtZXRlcl8yMDIifSx7ImlkIjoxMCwiaXRlbU5hbWUiOiJUb2x1ZW5lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIzMiJ9LHsiaWQiOjExLCJpdGVtTmFtZSI6IlAtWHlsZW5lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzMyNCJ9LHsiaWQiOjEyLCJpdGVtTmFtZSI6IlRlbXAiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTk4In0seyJpZCI6MTMsIml0ZW1OYW1lIjoiUkgiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM1In0seyJpZCI6MTQsIml0ZW1OYW1lIjoiV1MiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjMzIn0seyJpZCI6MTUsIml0ZW1OYW1lIjoiV0QiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM0In0seyJpZCI6MTYsIml0ZW1OYW1lIjoiU1IiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM3In0seyJpZCI6MTcsIml0ZW1OYW1lIjoiQlAiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM4In0seyJpZCI6MTgsIml0ZW1OYW1lIjoiQVQiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjA0In0seyJpZCI6MTksIml0ZW1OYW1lIjoiVE9ULVJGIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzM3In0seyJpZCI6MjAsIml0ZW1OYW1lIjoiUkYiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM2In1dLCJjcml0ZXJpYSI6IjEgSG91cnMiLCJyZXBvcnRGb3JtYXQiOiJUYWJ1bGFyIiwiZnJvbURhdGUiOiIwOS0wOS0yMDI0IFQwMDowMDowMFoiLCJ0b0RhdGUiOiIxNi0wOS0yMDI0IFQyMzozNTo1OVoiLCJzdGF0ZSI6IkRlbGhpIiwiY2l0eSI6IkRlbGhpIiwic3RhdGlvbiI6InNpdGVfMTIyIiwicGFyYW1ldGVyIjpbInBhcmFtZXRlcl8xOTMiLCJwYXJhbWV0ZXJfMjE1IiwicGFyYW1ldGVyXzIyNiIsInBhcmFtZXRlcl8xOTQiLCJwYXJhbWV0ZXJfMjI1IiwicGFyYW1ldGVyXzMxMSIsInBhcmFtZXRlcl8zMTIiLCJwYXJhbWV0ZXJfMjAzIiwicGFyYW1ldGVyXzIyMiIsInBhcmFtZXRlcl8yMDIiLCJwYXJhbWV0ZXJfMjMyIiwicGFyYW1ldGVyXzMyNCIsInBhcmFtZXRlcl8xOTgiLCJwYXJhbWV0ZXJfMjM1IiwicGFyYW1ldGVyXzIzMyIsInBhcmFtZXRlcl8yMzQiLCJwYXJhbWV0ZXJfMjM3IiwicGFyYW1ldGVyXzIzOCIsInBhcmFtZXRlcl8yMDQiLCJwYXJhbWV0ZXJfMzciLCJwYXJhbWV0ZXJfMjM2Il0sInBhcmFtZXRlck5hbWVzIjpbIlBNMi41IiwiUE0xMCIsIk5PIiwiTk8yIiwiTk94IiwiTkgzIiwiU08yIiwiQ08iLCJPem9uZSIsIkJlbnplbmUiLCJUb2x1ZW5lIiwiUC1YeWxlbmUiLCJUZW1wIiwiUkgiLCJXUyIsIldEIiwiU1IiLCJCUCIsIkFUIiwiVE9ULVJGIiwiUkYiXX0sInBhZ2luYXRpb24iOjF9'

};
var options2 = {
  'method': 'POST',
  'url': 'https://airquality.cpcb.gov.in/caaqms/fetch_table_data',
  'headers': {
    'accept': 'q=0.8;application/json;q=0.9',
    'accept-language': 'en-US,en;q=0.9,en-IN;q=0.8,de-DE;q=0.7,de;q=0.6,fr;q=0.5',
    'content-type': 'text/plain',
    'cookie': '_ga=GA1.3.2000861744.1721495335; _gid=GA1.3.385057462.1726505085; _ga_40XB5TDTEW=GS1.3.1726505086.10.0.1726505086.0.0.0; _xsrf=4052bcf5de6d4e01bdac58ba6a10cfe9; ccr_captcha="NW4SbhjBx2S7lZLE9dph0PRldYnmrLcjuoiqbo2cv3uIa76RbhWqiPZKA+X5gEapVwemmSZpSAfMXeSbiH71NsuUH1YI0iJVHRRJcjpNrOKzApdRPF1KwtBvR3GCgK9IEgfb4Mrkz5dt9j2d5DCdtCaGUH6CSK+8rYHyRMFD+gjGdK2OyYpMit4C6AYGUcUHel8NbjNyj/ubT5LVUe1UrIZ6CiZ+EEcbuILUtnXQBIWUmYrwKG46/Jf0aIxS4zif0ELleIGm/0IXXgBb+z24mA=="; ccr_public="sRDnqVrdTzS6xD4fL/ilUFwOmWpYbpcupiVNT8sDpUdY9UswBTbeyTvdMPZ2M0vLKcDLunJiiIU9MiLSLOmyV1dA5gwa0IU5WQKXeuS+EhcsxxP9DSeK4Z7CvPqsxlMa1nKCu6ycW8Hqd7EBXO8FR0wafBfiGvRIMpPPigpkgvRwpktceELtxx7y0+aBzohXwSQI0gdAQ1DPylrT5Iq1gBmivz6IzqKN2Etma5FOv3zqBhSXmvH2HXMMMpyovrFSWZb8WtOX3bGSX2quffG7tfhUoBoOFggGtVefX7Fn9fgNzRViLZSA5qPn/I88ZJyfSlpMEWXRWgSr9NItd9X2m5JhyFYKyk36NFFmw2WdOpc="',
    'origin': 'https://airquality.cpcb.gov.in',
    'priority': 'u=1, i',
    'referer': 'https://airquality.cpcb.gov.in/ccr/',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
  },
  body: 'eyJkcmF3IjoxLCJjb2x1bW5zIjpbeyJkYXRhIjowLCJuYW1lIjoiIiwic2VhcmNoYWJsZSI6dHJ1ZSwib3JkZXJhYmxlIjpmYWxzZSwic2VhcmNoIjp7InZhbHVlIjoiIiwicmVnZXgiOmZhbHNlfX1dLCJvcmRlciI6W10sInN0YXJ0IjowLCJsZW5ndGgiOjEwLCJzZWFyY2giOnsidmFsdWUiOiIiLCJyZWdleCI6ZmFsc2V9LCJmaWx0ZXJzVG9BcHBseSI6eyJwYXJhbWV0ZXJfbGlzdCI6W3siaWQiOjAsIml0ZW1OYW1lIjoiUE0yLjUiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTkzIn0seyJpZCI6MSwiaXRlbU5hbWUiOiJQTTEwIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIxNSJ9LHsiaWQiOjIsIml0ZW1OYW1lIjoiTk8iLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjI2In0seyJpZCI6MywiaXRlbU5hbWUiOiJOTzIiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTk0In0seyJpZCI6NCwiaXRlbU5hbWUiOiJOT3giLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjI1In0seyJpZCI6NSwiaXRlbU5hbWUiOiJOSDMiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMzExIn0seyJpZCI6NiwiaXRlbU5hbWUiOiJTTzIiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMzEyIn0seyJpZCI6NywiaXRlbU5hbWUiOiJDTyIsIml0ZW1WYWx1ZSI6InBhcmFtZXRlcl8yMDMifSx7ImlkIjo4LCJpdGVtTmFtZSI6Ik96b25lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIyMiJ9LHsiaWQiOjksIml0ZW1OYW1lIjoiQmVuemVuZSIsIml0ZW1WYWx1ZSI6InBhcmFtZXRlcl8yMDIifSx7ImlkIjoxMCwiaXRlbU5hbWUiOiJUb2x1ZW5lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzIzMiJ9LHsiaWQiOjExLCJpdGVtTmFtZSI6IlAtWHlsZW5lIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzMyNCJ9LHsiaWQiOjEyLCJpdGVtTmFtZSI6IlRlbXAiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMTk4In0seyJpZCI6MTMsIml0ZW1OYW1lIjoiUkgiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM1In0seyJpZCI6MTQsIml0ZW1OYW1lIjoiV1MiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjMzIn0seyJpZCI6MTUsIml0ZW1OYW1lIjoiV0QiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM0In0seyJpZCI6MTYsIml0ZW1OYW1lIjoiU1IiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM3In0seyJpZCI6MTcsIml0ZW1OYW1lIjoiQlAiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM4In0seyJpZCI6MTgsIml0ZW1OYW1lIjoiQVQiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjA0In0seyJpZCI6MTksIml0ZW1OYW1lIjoiVE9ULVJGIiwiaXRlbVZhbHVlIjoicGFyYW1ldGVyXzM3In0seyJpZCI6MjAsIml0ZW1OYW1lIjoiUkYiLCJpdGVtVmFsdWUiOiJwYXJhbWV0ZXJfMjM2In1dLCJjcml0ZXJpYSI6IjEgSG91cnMiLCJyZXBvcnRGb3JtYXQiOiJUYWJ1bGFyIiwiZnJvbURhdGUiOiIxMC0wOS0yMDI0IFQwMDowMDowMFoiLCJ0b0RhdGUiOiIxNi0wOS0yMDI0IFQyMzozNTo1OVoiLCJzdGF0ZSI6IkRlbGhpIiwiY2l0eSI6IkRlbGhpIiwic3RhdGlvbiI6InNpdGVfMTIyIiwicGFyYW1ldGVyIjpbInBhcmFtZXRlcl8xOTMiLCJwYXJhbWV0ZXJfMjE1IiwicGFyYW1ldGVyXzIyNiIsInBhcmFtZXRlcl8xOTQiLCJwYXJhbWV0ZXJfMjI1IiwicGFyYW1ldGVyXzMxMSIsInBhcmFtZXRlcl8zMTIiLCJwYXJhbWV0ZXJfMjAzIiwicGFyYW1ldGVyXzIyMiIsInBhcmFtZXRlcl8yMDIiLCJwYXJhbWV0ZXJfMjMyIiwicGFyYW1ldGVyXzMyNCIsInBhcmFtZXRlcl8xOTgiLCJwYXJhbWV0ZXJfMjM1IiwicGFyYW1ldGVyXzIzMyIsInBhcmFtZXRlcl8yMzQiLCJwYXJhbWV0ZXJfMjM3IiwicGFyYW1ldGVyXzIzOCIsInBhcmFtZXRlcl8yMDQiLCJwYXJhbWV0ZXJfMzciLCJwYXJhbWV0ZXJfMjM2Il0sInBhcmFtZXRlck5hbWVzIjpbIlBNMi41IiwiUE0xMCIsIk5PIiwiTk8yIiwiTk94IiwiTkgzIiwiU08yIiwiQ08iLCJPem9uZSIsIkJlbnplbmUiLCJUb2x1ZW5lIiwiUC1YeWxlbmUiLCJUZW1wIiwiUkgiLCJXUyIsIldEIiwiU1IiLCJCUCIsIkFUIiwiVE9ULVJGIiwiUkYiXX0sInBhZ2luYXRpb24iOjF9'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  // console.log(response.body);
  const decodedData = Buffer.from(response.body, 'base64').toString('utf-8');

// Step 2: Parse the decoded data into JSON
const jsonData = JSON.parse(decodedData);

// Output the JSON object
console.log(jsonData);
generateTable(jsonData);
});

request(options2, function (error, response) {
  if (error) throw new Error(error);
  // console.log(response.body);
  const decodedData = Buffer.from(response.body, 'base64').toString('utf-8');

// Step 2: Parse the decoded data into JSON
const jsonData = JSON.parse(decodedData);

// Output the JSON object
console.log(jsonData);
generateTable(jsonData);
});

// Function to generate a table from the JSON data
function generateTable(data) {
  const tabularData = data.data.tabularData;
  
  // Extract the header
  const headers = tabularData.header.map(h => h.value);
  
  // Extract the body content
  const bodyContent = tabularData.bodyContent.map(record => {
    return headers.map(headerKey => record[tabularData.header.find(h => h.value === headerKey).key] || '');
  });
  
  // Display table
  console.log(headers.join('\t'));
  bodyContent.forEach(row => {
    console.log(row.join('\t'));
  });
}









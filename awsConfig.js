import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: "ASIAQADZQP33QEN65CB7",
    secretAccessKey: "wViTukYEnCm16BUS8TZxNAwXzO3tGgdf+ZqjnRgU",
    sessionToken: "IQoJb3JpZ2luX2VjENP//////////wEaCXVzLXdlc3QtMiJIMEYCIQDQ6qlQRoMnt7sgQgwLKfzIGWbh5iVwYJrQFo2IlGXPQAIhAPxfRQ4q9eC/bOH3PySlje/Ye4fsfSdu7/MwPSw6ILPTKsECCFwQABoMMDAwMjU0ODM2NDcxIgwF6AObdt3rrTJgVH0qngLSyOAbZVUdYOzEJhbpUDCr8kUY4mT3eFrVM5b/lRGCg+/rdogMJLSNxwGzDWJ4OdxG1WYXZkN3bhdEZy01xg9QmBiDvM7fo68nByKnP+IogF/hkbYNOsG3Squd2B4YwWOvLl7eCJDDT8bYluqfflh/t7gTnpjPx7kd6fhL4w2zF51IvyWhzEzWWVjZujhJqaLQVl/ixkuuiU2yMvdKrAE1APYYBeyhyUNsJ9DCzqutFCUnXrO8x8Kjlon+41QkHuBXw+X+1H3PKk0a8qecEwPZ1hr3O7ki5jiBHZpWbx5ZLcRPlb8BR+yuCkPRwO64WoqLjRYbGWAgQwo4X1+E6nh/AWvx77S1hiGUhW5X9Udhv1mJGtN0NHD81REwKm0SMJi7g8AGOp0BGr/jiLy21cES/p5WGW29flTDoFogu4NVHdH9SbVB63THavj28GyNfyurIzmLYjLxax3i5koFZukruJAC/87pHGaSbUdPXtD+coCIUe+kpSzx93HKnDR0+bveI/BLlAdg3YgQ8hhBFtiLFfRqyT2tOk3JCl0sJqW5QOp5YmZV76qquOmheNTORZVoE/7EDN/XqT3YcbjGL6s3dp6jyw==",
    regio: "us-east-1",
});

const s3 = new AWS.S3();

export default s3;
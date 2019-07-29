module.exports = {

    config() {

        private_key = 
            process.env.private_key0 +'\n' +
            process.env.private_key1 +'\n' +
            process.env.private_key2 +'\n' +
            process.env.private_key3 +'\n' +
            process.env.private_key4 +'\n' +
            process.env.private_key5 +'\n' +
            process.env.private_key6 +'\n' +
            process.env.private_key7 +'\n' +
            process.env.private_key8 +'\n' +
            process.env.private_key9 +'\n' +
            process.env.private_key10 +'\n' +
            process.env.private_key11 +'\n' +
            process.env.private_key12 +'\n' +
            process.env.private_key13 +'\n' +
            process.env.private_key14 +'\n' +
            process.env.private_key15 +'\n' +
            process.env.private_key16 +'\n' +
            process.env.private_key17 +'\n' +
            process.env.private_key18 +'\n' +
            process.env.private_key19 +'\n' +
            process.env.private_key20 +'\n' +
            process.env.private_key21 +'\n' +
            process.env.private_key22 +'\n' +
            process.env.private_key23 +'\n' +
            process.env.private_key24 +'\n' +
            process.env.private_key25 +'\n' +
            process.env.private_key26 +'\n' +
            process.env.private_key27 +'\n'
        
        const result = {
            type: process.env.type,
            project_id: process.env.project_id,
            private_key_id: process.env.private_key_id,
            private_key: private_key,
            client_email: process.env.client_email,
            client_id: process.env.client_id,
            auth_uri: process.env.auth_uri,
            token_uri: process.env.token_uri,
            auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
            client_x509_cert_url: process.env.client_x509_cert_url
        }
        // const result = {
        //     type: "service_account",
        //     project_id: "cpf-storage",
        //     private_key_id: "493b6921657d9a62c58bd11c34ec6813817ddcf7",
        //     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMRNlU0kyZneyZ\nygeiJ/ASeIl/Td8ufp6M6dl/jgsl5z1v6QDAP4I11AlOLZCHP0xcsMdz/WEHlP9D\nOI7K/pLf1SG3OWmUlLsLT2naX76e3m9Wugl7mcCHGHaoo6GhM8A36Ba9owq9m9F3\ndzi/3NpaAzC7OlKYVDimlut3VqmipGNkN8eOA+3ktTqKONJSgBCh5T41vDbpKSyE\nsEETc4Dyv3BJzB49QXNrnJtEbywdkqc0jWiZnv61noayMGnRSh2ysgWDWz0nJ+NG\nR47puLpmubMc5fD664p5Dyvwmko1fvJAeozpcAh6JqFMSvEeTEIHVv/+PW/E91jb\nnq/VEPNHAgMBAAECggEAS3yqABGTYzWcSR0DAybVLk5DKbuCXbFHMHX+/YdlkUVK\nTAAEWgdePDw2kCCAh6qZsqtVmgSqBd5HEvVkt5mqd3NQ+WALJ3BrSvu2949oZ1d2\nN8uaU4X3QzWELEAELAlu4HoxZTVKc9WQbCCv5R9dxePl71rXSRnesZmWPMzW9ZY3\nAjp5da+BnuRXaQCwuq1rnhM4TlgRPYu9pyyBo3ltilwLQlmbiMCba0g3ws0n29iA\nVxYWQzZyBt8hmJCI6qaSM5/RX2ItU4lkieqgJxr4PvMJni+xgum76S/ubLGeycHk\nS7zxcXyVUSu5EH1dalolaanlfosbKmBvea2Yqa8h4QKBgQD1Sq9NQ8uIwlXQ0lB+\nI95ypRgLRmyBWhUREb/T2u1s/1JbrJByT4+mqsB6jInBmm+rsU38xg/wRbFs7k3b\npKXoqJkkJ5+dvbqi5NO/wW7B9fQdYw3P21mS1gml2mQpu3yoFbrE+8hMLJGvXxhm\nA0Eo6teel5TnlVDuSIQHZw6ScQKBgQDVL7ROGtAwzrhunoxsdUKI8pJBY48CD0OD\nNQRlUIHBKs7OYavddOrzfo6ICr8SJ+QI7j7YwoXQxGmHO8gSZ+HgGFsv8hwJZE2d\nMcdrOruQmX7wKY67p0dP0HmkRMiHoJf2n7on2+sJxlXkJry1KC0a3jQ8MySxWh1l\nbPy4L9vNNwKBgQC0qEjsUx44n0is//kgrjJLpaRLyZZovnv9kmECG5/6QyHZOwM3\n7bkTO3d/yro6yQ+uGGwj24wpnmrKm8jkGCPJc0M3CafZeb9X8ciy1jhIymj8q9Ok\nXx1dtB5u9KYIxnlNIpPoOLiQwdKaoyNJHuSCylP8DhAxcBunI+l5ukFVQQKBgBQH\nOExCLp73PNJ/qLejyI1vJJhqDwxlfLU97NzL1HTeXbF78ZaLnmsjz6YuREcjYkQI\nhfT9SW8UlMl0r1YzVkAkaaS2fTXQq44CGDcVvHtYQFm1vcgZbhSshFEPeTtstfog\nhW+rNIiljnoxvXbTgHFOwN+K+n6C9dIKjC+Np3u/AoGARW22RtcAuOrx1sH69sZl\nQvcrjdJmtHoL+5B3p+svhYkEHQ5+Rfg44SoOMeulPY/xdy1o7vMHJc11/X6tA0gN\nnYww7w4WD2c8u+k9pAryR7fRRjGEHiez9X8Z0rlce7V13aVtUHzaAmz9GKgzviL/\nxg+GGPezaKVcaYZUa6itKdY=\n-----END PRIVATE KEY-----\n",
        //     client_email: "firebase-adminsdk-cvtba@cpf-storage.iam.gserviceaccount.com",
        //     client_id: "107499521255354034862",
        //     auth_uri: "https://accounts.google.com/o/oauth2/auth",
        //     token_uri: "https://oauth2.googleapis.com/token",
        //     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        //     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cvtba%40cpf-storage.iam.gserviceaccount.com"
        // }
        return result
    } 
}
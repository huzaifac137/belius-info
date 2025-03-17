import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="data-protection-clearance">
      <h1>Privacy Policy</h1>

      <section>
        <h2>1. Information about the collection of personal data and contact details of the responsible party</h2>
        <p><strong>1.1</strong> We are happy with our use of our application (following “App”). I have Further information about your contact with your data. when using our app. Personal data refers to all data that can be used to identify you personally.</p>
        <p><strong>1.2</strong> Responsibility for the data processing used by the user of the app Datenschutz-Grundverordnung (DSGVO) is "Samuel Bellino, Seestrasse 18, 8802, Kilchberg ZH, +41 76 346 20 65, samuel.bellino@hotmail.com. The controller responsible for the processing of personal data is the natural or legal person. who only has common ground with others about their swimming and support decides on the processing of personal data.</p>
        <p><strong>1.3</strong> This app uses SSL or TLS encryption for security reasons and to protect the transmission of personal data and other confidential content (e.g., orders or inquiries to the controller). You can recognize an encrypted connection by the character string "https://" and the padlock symbol in your browser’s address bar.</p>
      </section>

      <section>
        <h2>2. Log Files When Using Our Mobile App</h2>
        <p>When you download our mobile app from an app store, the required information is transmitted to the app store, particularly your username, email address, customer account number, time of download, payment information, and the unique device identifier. We have no influence on this data collection and are not responsible for it. We only process this data to the extent necessary for downloading the mobile app onto your mobile device.</p>
        <p>When using our mobile app, we collect the following personal data as described below to enable convenient use of the app’s features.</p>
        <ul>
          <li>Date and time of the request</li>
          <li>Time zone difference from Greenwich Mean Time (GMT)</li>
          <li>Content of the request</li>
          <li>Access status / HTTP status code</li>
          <li>Amount of data transmitted in bytes</li>
          <li>Source/referrer from which you accessed the page</li>
          <li>Browser used</li>
          <li>Language and version of the browser software</li>
          <li>Operating system used and its interface</li>
          <li>IP address used (if applicable: in anonymized form)</li>
        </ul>
        <p>The processing is carried out in accordance with Art. 6(1)(f) GDPR based on our legitimate interest in improving the stability and functionality of our app. The data will not be disclosed or used in any other way. However, we reserve the right to retrospectively review the aforementioned log files if there are concrete indications of unlawful use.</p>
        <p>In addition, we require your device’s unique number (IMEI = International Mobile Equipment Identity), the subscriber's unique number (IMSI = International Mobile Subscriber Identity), mobile phone number (MSISDN), possibly the MAC address for WLAN use, and the name of your mobile device.</p>
      </section>

      {/* Continue with other sections similarly */}

      <section>
        <h2>15. Data Subject Rights</h2>
        <p><strong>15.1</strong> Applicable data protection law grants you, as the data subject, comprehensive rights regarding the processing of your personal data by the controller. We inform you of these rights below:</p>
        <ul>
          <li>Right of access pursuant to Art. 15 GDPR</li>
          <li>Right to rectification pursuant to Art. 16 GDPR</li>
          <li>Right to erasure pursuant to Art. 17 GDPR</li>
          <li>Right to restriction of processing pursuant to Art. 18 GDPR</li>
          <li>Right to notification pursuant to Art. 19 GDPR</li>
          <li>Right to data portability pursuant to Art. 20 GDPR</li>
          <li>Right to withdraw consent pursuant to Art. 7 (3) GDPR</li>
          <li>Right to lodge a complaint pursuant to Art. 77 GDPR</li>
        </ul>
        <p><strong>15.2</strong> RIGHT TO OBJECT</p>
        <p>IF WE PROCESS YOUR PERSONAL DATA BASED ON OUR LEGITIMATE INTERESTS AS PART OF A BALANCING OF INTERESTS, YOU HAVE THE RIGHT TO OBJECT TO THIS PROCESSING AT ANY TIME WITH EFFECT FOR THE FUTURE, ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION.</p>
      </section>

      <section>
        <h2>16. Duration of the Storage of Personal Data</h2>
        <p>The duration of the storage of personal data depends on the respective legal basis, the purpose of processing, and—if applicable—also on the statutory retention periods (e.g., commercial and tax law retention periods). If the processing of personal data is based on an explicit consent pursuant to Art. 6(1)(a) GDPR, the data concerned will be stored until you revoke your consent. If there are statutory retention periods for data that are processed in connection with contractual or quasi-contractual obligations based on Art. 6(1)(b) GDPR, these data will be routinely deleted after the expiration of the retention periods, provided they are no longer required for the fulfillment of the contract or for the initiation of a contract, and/or there is no legitimate interest on our part in continuing the storage.</p>
        <p>If personal data is processed on the basis of Art. 6(1)(f) GDPR, it will be stored until you exercise your right to object pursuant to Art. 21(1) GDPR, unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing serves to assert, exercise, or defend legal claims.</p>
        <p>If personal data is processed for the purpose of direct marketing on the basis of Art. 6(1)(f) GDPR, such data will be stored until you exercise your right to object pursuant to Art. 21(2) GDPR. Unless otherwise stated in the other information provided in this declaration about specific processing situations, personal data stored will otherwise be deleted when they are no longer necessary for the purposes for which they were collected or otherwise processed.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
import * as React from 'react';

interface EmailTemplateProps {
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message
}) => (
    <>
  <div>
    <p>Message : {message}!</p>
  </div>
  </>
);


export default EmailTemplate;
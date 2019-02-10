import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
host = "smtp.gmail.com"
port = 587
username = "python.test.udemy@gmail.com"
password = "The password was censored;)"
from_email = username
to_list = ["python.test.udemy@gmail.com"]
try: 
    email_conn = smtplib.SMTP(host, port)
    email_conn.ehlo()
    email_conn.starttls()
    email_conn.login(username, password)
    the_msg = MIMEMultipart("alternative")
    the_msg['Subject'] = "Hello there! Testing HTML:)"
    the_msg["From"] = from_email
    the_msg["To"] = to_list[0]
    plain_txt = "Testing the message"
    html_txt = """\
    <html>
        <head></head>
        <body>
            <p>This is a test message written in HTML</p>
        </body>
    </html>
    """
    part_1 = MIMEText(plain_txt, 'plain')
    part_2 = MIMEText(html_txt, "html")
    the_msg.attach(part_1)
    the_msg.attach(part_2)
    # print(the_msg.as_string())
    email_conn.sendmail(from_email, to_list, the_msg.as_string())
    email_conn.quit()
except smtplib.SMTPException:
    print("error sending message")

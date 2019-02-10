import smtplib

host = "smtp.gmail.com"
port = 587
username = "python.test.udemy@gmail.com"
password = "The password was censored"
from_email = username
to_list = ["python.test.udemy@gmail.com"]

email_conn = smtplib.SMTP(host, port)
email_conn.ehlo()
email_conn.starttls()
email_conn.login(username, password)
email_conn.sendmail(from_email, to_list, "Hello there this is an email message")
email_conn.quit()

from smtplib import SMTP

email_conn2 = smtplib.SMTP(host, port)
email_conn2.ehlo()
email_conn2.starttls()
email_conn2.login(username, password)
email_conn2.sendmail(from_email, to_list, "Yet another message...")
email_conn2.quit()

from smtplib import SMTPAuthenticationError, SMTPException

pass_wrong = smtplib.SMTP(host, port)
pass_wrong.ehlo()
pass_wrong.starttls()
try:
    pass_wrong.login(username, "wrong")
    pass_wrong.sendmail(from_email, to_list, "Yet another message...")
except:
    print("An error occurred.")
pass_wrong.quit()

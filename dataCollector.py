import serial
import requests
import random, time

flag = False
# config COM port
while(1):
    time.sleep(0.1)
    portName = input("Enter the port name:")
    try:
        # config COM port section
        ser = serial.Serial(
            port=portName,
            baudrate=9600,
            parity=serial.PARITY_NONE,
            stopbits=serial.STOPBITS_ONE,
            bytesize=serial.EIGHTBITS,
            timeout=0
        )
        break
    except:
       # Disconnected or port name Invaild
       print("Invaild Value")


while(1):
    time.sleep(0.1)
    if ser.readable():
        smo = ser.readline()
        if not smo:
            continue
        #print(smo)
        msg = smo.decode()[:len(smo)-1].split(" : ")
        cmd = msg[0]
        print(msg)
        try:
            data = {'value' : float(msg[1][0])}
            print(data)
        except:
            print("Invaild Value")
            continue
        
        if cmd not in ['irDetect']:
            print("Invaild Command")
            continue
        try:
            requests.post("http://localhost:8000/sensor/set" + cmd, data = data)
        except:
            print("Invaild Command")
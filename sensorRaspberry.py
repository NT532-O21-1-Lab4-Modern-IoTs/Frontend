    import smbus2
    import time
    import paho.mqtt.client as mqtt

    mqtt_broker = 'cfb2b6afd6964117af879a0b7d570659.s1.eu.hivemq.cloud'
    mqtt_port = 8883
    mqtt_topic = 'cq21/nhom3/sensor'
    mqtt_username = 'Dattt'
    mqtt_password = 'Dat123456'

    bus = smbus2.SMBus(1)
    sensor_address = 0x23
    CMD_READ = 0x10

    def read_light():
        data = bus.read_i2c_block_data(sensor_address, CMD_READ, 2)
        return ((data[1] + (256 * data[0])) / 1.2)
    def on_connect(client, userdata, flags, rc):
        print(f"Connected with result code {rc}")
    def on_publish(client, userdata, result):
        print("Data published.")
    client = mqtt.Client()
    client.username_pw_set(mqtt_username, mqtt_password)
    client.tls_set()  
    client.on_connect = on_connect
    client.on_publish = on_publish
    client.connect(mqtt_broker, mqtt_port, 60)
    client.loop_start()

    try:
        while True:
            light_level = read_light()
            message = f'Light: {light_level:.2f} lx'
            client.publish(mqtt_topic, message)
            print(f'Published: {message}')
            time.sleep(10) 

    except KeyboardInterrupt:
        print("Exiting...")
    finally:
        client.loop_stop()
        client.disconnect()

package main

import (
	"encoding/hex"
	"fmt"
	"net"
)

func main() {
	addr := net.UDPAddr{
		Port: 3478,
		IP:   net.ParseIP("127.0.0.1"),
	}

	conn, err := net.ListenUDP("udp", &addr)
	if err != nil {
		fmt.Printf("error listening")
	}

	for {
		display(conn)
	}
}

func display(conn *net.UDPConn) {

	var buf [2048]byte
	n, err := conn.Read(buf[0:])
	if err != nil {
		fmt.Println("Error Reading")
		return
	}
	fmt.Println(hex.EncodeToString(buf[0:n]))
	fmt.Println("Package Done")
}

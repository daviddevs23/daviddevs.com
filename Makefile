default:
	g++ -std=c++14 -o main main.cpp -lwthttp -lwt

clean:
	rm main

run: default
	./main --docroot . --http-address 0.0.0.0 --http-port 9090

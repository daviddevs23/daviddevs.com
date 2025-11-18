default:
	g++ -std=c++23 -o main main.cpp -lpthread

clean:
	rm main

run: default
	./main

#include <iostream>
using namespace std;

class Pessoa {
    public:
    string nome;
};

int main (int argc, char** argv) {
    Pessoa p1;
    Pessoa p2;
    p1.nome = "Lucas";
    p2.nome = "Pedro";

    cout << p1.nome << endl; 
    cout << p2.nome << endl;

    return 0 ;
}
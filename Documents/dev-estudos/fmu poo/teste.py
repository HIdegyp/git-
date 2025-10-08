import tkinter as tk
from tkinter import simpledialog, messagebox

# Classe Viga com encapsulamento
class Viga:
    def __init__(self):
        self.__base = 0
        self.__altura = 0
        self.__comprimento = 0

    # Getters e Setters (encapsulamento)
    def get_base(self):
        return self.__base

    def set_base(self, base):
        self.__base = base

    def get_altura(self):
        return self.__altura

    def set_altura(self, altura):
        self.__altura = altura

    def get_comprimento(self):
        return self.__comprimento

    def set_comprimento(self, comprimento):
        self.__comprimento = comprimento

    # Método para calcular volume
    def calcular_volume(self):
        return self.__base * self.__altura * self.__comprimento


# Programa principal
if __name__ == "__main__":
    # Criar janela oculta do Tkinter (necessária para usar caixas de diálogo)
    root = tk.Tk()
    root.withdraw()

    # Criar objeto Viga
    viga = Viga()

    # Entrada de dados via caixa de diálogo
    base = float(simpledialog.askstring("Entrada", "Digite a base da viga:"))
    altura = float(simpledialog.askstring("Entrada", "Digite a altura da viga:"))
    comprimento = float(simpledialog.askstring("Entrada", "Digite o comprimento da viga:"))

    # Definir valores usando setters
    viga.set_base(base)
    viga.set_altura(altura)
    viga.set_comprimento(comprimento)

    # Calcular volume
    volume = viga.calcular_volume()

    # Exibir resultado em caixa de mensagem
    messagebox.showinfo("Resultado", f"O volume da viga é: {volume}")

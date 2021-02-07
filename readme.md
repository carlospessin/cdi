<h2 align="center">
  Simulador de Rendatabilidade CDI
</h2>

---

<p align="center">
  <img src="src/assets/img.png">
</p>

---

### API

O Simulador de Rentabilidad CDI conta com o consumo de uma API do B3 (Bolsa Brasil Balcão) para garantir que a taxa do CDI sempre esteja atualizada, dando assim mais autonomia e confiança nos cálculos.

### Cálculos

Para esse cálculo utilizaremos os seguintes valores:

```
CDI: 1.90
Rendimento: 210
Investimento: 1000
```

Primeiro é feito o cálculo de quanto o banco paga sobre o CDI.

```
1.90 x 210 = 399
```

Dividindo esse valor por 100, temos a taxa anual

```
399 / 100 = 3.99
```

Dividindo esse valor por 12, temos a taxa mensal

```
399 / 12 = 0.33
```

Dividindo esse valor pela quantidade de dias no mês atual, temos a taxa diária

```
0.33 / 28 = 0.012 // para esse valor utilizaremos 3 casas decimais
```

Sabendo das taxas diária, mensal e anual, fazemos o cálculo com o investimento. Lembrando que como estamos trabalando com porcentagens, o valor final é dividido por 100.

```
3.99 x 1000 = 3990
3990 / 100 = 39.90 -> Rendimento Anual

0.33 x 1000 = 330
330 / 100 = 3.33 -> Rendimento Mensal

0.012 x 1000 = 12
12 / 100 = 0.12 -> Rendimento Diário
```

---

Este projeto esta sobe a licença MIT - Veja o arquivo [license.md](https://github.com/carlospessin/CDI/blob/master/license.md) para detalhes.

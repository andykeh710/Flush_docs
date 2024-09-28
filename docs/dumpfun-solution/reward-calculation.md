# Reward Calculation

## Key Variables

- **A (Age of Token)**: Duration since the token was created.
- **L (Liquidity)**: Current liquidity of the token.
- **MV (Market Value)**: Current market value of the token.
- **N (Notoriety)**: Reputation of the token, based on community feedback or reports of scams.
- **HD (Holder Distribution)**: Concentration of tokens in the top 10 wallets.
- **BD (Burn Demand)**: Current demand for burning the token.
- **UE (User Engagement)**: Level of user activity on the platform.

## Reward Equation
The reward in $DUMP tokens is calculated using the weighted sum of these key variables:

$$
R = A w_{A} + BD w_{BD} + HD w_{HD} + L w_{L} + MV w_{MV} + N w_{N} + UE w_{UE}
$$

## Normalization Functions

- **normalize(A)**: 
  $$
  \frac{Current_{Date} - Token_{Creation Date}}{Max_{Age}}
  $$

- **normalize(L)**: 
  $$
  \frac{L}{Max_{Liquidity}}
  $$

- **normalize(MV)**: 
  $$
  \frac{\log(MV)}{\log(Max_{Market Value})}
  $$

- **normalize(N)**: Score based on community feedback or scam reports (0-1)

- **normalize(HD)**: 
  $$
  - \frac{Top_{10 Wallets}}{Total_{Supply}} + 1
  $$

- **normalize(BD)**: 
  $$
  \frac{Current_{Burn Requests}}{Average_{Burn Requests}}
  $$

- **normalize(UE)**: 
  $$
  \frac{User_{Activities Score}}{Max_{Activity Score}}
  $$

## Dynamic Reward Multiplier (M)
The dynamic reward multiplier helps maintain platform stability by adjusting rewards based on factors such as platform-wide burn rates, token supply, and market conditions.

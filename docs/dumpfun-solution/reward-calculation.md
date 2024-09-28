# Reward Calculation

The DumpFun platform uses a sophisticated algorithm to calculate rewards in **$DUMP** tokens. This system is designed to incentivize user engagement, promote long-term holding, and reward active participation in the ecosystem.



### Reward Equation

The reward (R) in **$DUMP** tokens is calculated using a weighted sum of key variables:

$$
R = A w_{A} + BD w_{BD} + HD w_{HD} + L w_{L} + MV w_{MV} + N w_{N} + UE w_{UE}
$$

Where:

- R: Total reward in $DUMP tokens
- w: Weight assigned to each variable (subscript corresponds to the variable)



### How It Works

1. **Activity Score (A)**: Measures the frequency and quality of user interactions on the platform. Higher activity leads to a higher score.

2. **Burn/Dump Ratio (BD)**: Compares the amount of tokens burned versus dumped. A higher ratio of burning to dumping increases rewards.

3. **Holding Duration (HD)**: Rewards users for holding $DUMP tokens longer. The longer the hold, the higher the reward multiplier.

4. **Liquidity Provided (L)**: Incentivizes users who provide liquidity to $DUMP pools. More liquidity provided results in higher rewards.

5. **Meme Virality Score (MV)**: Rewards users for creating and sharing popular memes related to $DUMP. Viral memes earn higher scores.

6. **Network Growth Contribution (N)**: Measures a user's contribution to expanding the $DUMP network, such as referrals or community building.

7. **User Engagement Metrics (UE)**: Considers various engagement factors like voting participation, comment quality, and community contributions.

### Dynamic Weighting

The weights (w) for each variable are dynamically adjusted based on current market conditions and platform goals. This ensures the reward system remains balanced and aligned with the overall objectives of the DumpFun ecosystem.

### Example Calculation

For illustration, let's consider a simplified scenario with arbitrary values:

- **Activity Score (A)**: 100
- **Burn/Dump Ratio (BD)**: 0.5
- **Holding Duration (HD)**: 1 year
- **Liquidity Provided (L)**: $100,000
- **Meme Virality Score (MV)**: 50
- **Network Growth Contribution (N)**: 20
- **User Engagement Metrics (UE)**: 80

If we assume equal weights of 0.1 for all variables (for simplicity), the reward calculation would be:

**R = (100 * 0.1) + (0.8 * 0.1) + (30 * 0.1) + (1000 * 0.1) + (50 * 0.1) + (5 * 0.1) + (75 * 0.1)**

This would result in a reward of approximately 126.08 $DUMP tokens.

Note: In practice, the weights and calculations are more complex and dynamically adjusted based on various factors and platform objectives.

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

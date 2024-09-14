---
sidebar_label: 'Index Protocol'
sidebar_position: 101
---

# Synchrony Index Protocol
## 5.1 Configurable
Each of Synchrony’s indices are completely configurable, affording investment strategies with a high degree of specificity.
A user can define the parameters for which an asset or strategy would be considered a candidate for inclusion into a pool; essentially delineating a dataset. The index can then be configured with a chosen weighting metric, minimum and maximum weights, rebalancing period and the minimum and maximum number of assets to be returned by the index.
### 5.1.1 Whitelisting
Whitelisting enables users to be even more specific with regards to the dataset they want an index to evaluate.
For example, 
## 5.2 Dynamic
There are no on-chain implementations of a dynamic index, most existing as static allocations where rebalancing just returns a pool's weights to that static allocation. 
Secondly, no on-chain implementations of an index-pegged pool implement dynamic compositions; the tokens chosen when the pool is initialized are what you are stuck with unless you create a new pool.

Synchrony is different, not only are the weights dynamically adjusted to track a proper implementation of an index the pool’s composition is also dynamic, the protocol has the authority to add and remove assets from the pool.

Our initial implementation takes a somewhat naive approach by first converting the underlying tokens to USDC and then trading USDC for the target assets.

We have already planned and mapped out an improvement to be implemented after MVP.
This improvement calculates the most efficient swap paths by weighting the priority of a swap by its total pool allocation.
## 5.3 Powerful

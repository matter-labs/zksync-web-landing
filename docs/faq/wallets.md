# Wallets

[[toc]]

## What Ethereum wallets does zkSync support?

Generally, you can safely send funds to any Ethereum address (even to exchanges and smart contracts). The owner of this address will always be able to claim the funds.

The up-to-date list of the Etherum wallets that you can control from the zkSync web wallet can be found directly on [its homepage](https://wallet.zksync.io).

To control an address programmatically, all you need to is to be able to sign a message with it — eithr with native Ethereum signature, or via [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) in case of smart contracts.

## What if my wallet is not supported or can't sign a message?

Owners of some Ethereum addresses cannot use zkSync directly for various reasons (wallet not supported yet in the web interface; the address belongs to an exchange; an address belongs to a smart contract without [EIP1271](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md) support, e.g. Gnosis Safe).

In such cases, you can always withdraw funds from an L2 zkSync account to the same address in L1. The protocol allows this because the security invariant is not violated: funds never change ownership hand. However, it requires that the account should never have registered a zkSync public key before.

If you need to withdraw your funds from such an account, please shoot us your account address to **hello@matterlabs.dev** and we will initiate the withdrawal. In the future, this functionality will be fully automated.
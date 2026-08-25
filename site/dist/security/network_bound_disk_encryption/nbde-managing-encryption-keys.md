---
title: Tang server encryption key management
---

# Tang server encryption key management {#nbde-managing-encryption-keys}

The cryptographic mechanism to recreate the encryption key is based on the *blinded key* stored on the node and the private key of the involved Tang servers.

> [!NOTE]
> To protect against the possibility of an attacker who has obtained both the Tang server private key and the node’s encrypted disk, periodic rekeying is advisable.
>
> You must perform the rekeying operation for every node before you can delete the old key from the Tang server.

The following sections provide procedures for rekeying and deleting old keys.

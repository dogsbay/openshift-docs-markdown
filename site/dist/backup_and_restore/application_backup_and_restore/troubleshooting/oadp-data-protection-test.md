---
title: OADP Data protection test
---

# OADP Data protection test {#oadp-data-protection-test}

Validate your {{ oadp_short }} configuration by using the `DataProtectionTest` (DPT) custom resource (CR). This helps you ensure your data protection environment is properly configured and performing according to your requirements before performing backups.

The DPT checks the upload performance of backups to object storage, CSI snapshot readiness for persistent volume claims, and storage bucket configuration such as encryption and versioning.

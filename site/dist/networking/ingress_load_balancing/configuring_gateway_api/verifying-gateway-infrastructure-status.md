---
title: Verify Gateway infrastructure status
---

# Verify Gateway infrastructure status {#verifying-gateway-infrastructure-status}

To ensure your gateway infrastructure is properly configured and functioning, review the `status` conditions of your `GatewayClass` and `Gateway` custom resources (CRs). Checking these conditions confirms that the controller has successfully programmed your underlying data plane without routing conflicts.

To verify that your gateway infrastructure is functioning correctly, complete the following tasks:

- Understand `GatewayClass` status conditions to verify that the controller has claimed the class and that your installed API version is compatible.
- Review `Gateway` CR and listener `status` conditions to pinpoint data plane failures, configuration errors, or negative polarity conflicts.
- Query gateway infrastructure status using the CLI to quickly validate your deployment and retrieve assigned IP addresses.

## Additional resources {#verifying-gateway-infrastructure-status-additional-resources}

- [Installing a cluster on {{ gcp_short }} with customizations](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-customizations#installation-gcp-provisioning-dns-records_installing-gcp-customizations)

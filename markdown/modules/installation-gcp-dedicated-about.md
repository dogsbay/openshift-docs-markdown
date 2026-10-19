{%- set _mod_docs_content_type = "CONCEPT" %}
# Google Cloud Dedicated overview {id="installation-gcp-dedicated-about_{{ context }}"}

Google Cloud Dedicated (GCD) is a sovereign cloud platform that provides {{ gcp_short }} technology in a fully isolated environment with strict data and operational sovereignty guarantees. {._abstract}

{{ product_title }} supports deploying clusters to GCD sovereign cloud regions by using installer-provisioned infrastructure.


:::note

You cannot select a GCD sovereign cloud region by using the guided terminal prompts from the installation program. You must define the region and other GCD-specific parameters manually in the `install-config.yaml` file.

:::


## Sovereign cloud framework {id="gcp-dedicated-sovereign-cloud-framework_{{ context }}"}

GCD is part of Google’s sovereign cloud strategy, which addresses data residency, administrative access control, and operational sovereignty. Google’s sovereign cloud portfolio includes the following tiers:

*   Assured Workloads provides data residency controls within the public cloud.
*   Sovereign Controls by Partners adds partner-managed key management and audits.
*   GCD provides the highest level of sovereignty with fully isolated infrastructure operated by a regional partner.

Each GCD deployment is operated by a local partner who controls administrative access to the infrastructure. For example, in Germany, the main GCD partner is Thales.

## Key differences from public {{ gcp_short }} {id="gcp-dedicated-key-differences_{{ context }}"}

GCD regions differ from public {{ gcp_short }} in the following ways that affect {{ product_title }} installation and operation:


Single region per universe
:   Each GCD deployment operates as a single region. Multi-region features such as cross-region load balancing and multi-region storage are not available. You must use multiple zones within the single region for high availability.


Different API endpoints
:   GCD uses API endpoints in the format `<service>.apis-<region-host>.goog` instead of `<service>.googleapis.com`. For example, the Berlin region uses `compute.apis-berlin-build0.goog` instead of `compute.googleapis.com`. Cluster Operators automatically detect the sovereign cloud environment and override standard `googleapis.com` endpoints.


Domain-scoped project IDs
:   All GCD project IDs carry a mandatory prefix, such as `eu0:`. For example, a project named `my-project` has the project ID `eu0:my-project`. You must include this prefix in all commands and configuration.


Different service account email format
:   Service account email addresses use GCD-specific domains instead of standard Google Cloud format.


Limited service availability
:   Only a subset of {{ gcp_short }} services is available. Older Compute Engine machine types, ARM-based instances, TPUs, and several other services are not available.


No default VPC
:   A default VPC network is not automatically created for new projects. You must create or configure a VPC explicitly.

## {{ product_title }} constraints on GCD {id="gcp-dedicated-openshift-constraints_{{ context }}"}

{{ product_title }} on GCD has constraints around machine types, disk types, operating system images, DNS, and endpoint configuration that differ from standard {{ gcp_short }} installations.

## Supported GCD regions {id="gcp-dedicated-supported-regions_{{ context }}"}

The following GCD sovereign cloud regions are supported for {{ product_title }} installation:

**GCD regions**

| Region | Identifier | Zones |
| --- | --- | --- |
| Berlin, Germany | `u-germany-northeast1` | `u-germany-northeast1-a`, `u-germany-northeast1-b`, `u-germany-northeast1-c` |
| Eastern France | `u-france-east1` | `u-france-east1-a`, `u-france-east1-b`, `u-france-east1-c` |


:::note

Additional GCD regions might be supported in future releases. The architectural constraints, such as the single-region design, limited machine types, and different API endpoints, apply to all GCD regions.

:::
{%- set _mod_docs_content_type = "REFERENCE" %}
# Q2 2026 {id="osd-q2-2026_{{ context }}"}

The following items were added during the second quarter of 2026. {._abstract}


New worker node instance types are available
:   With this update, {{ product_title }} offers 8th generation worker instances such as G7e, P6-B300, and more. For more information and details on instance type differences, see [Instance types.](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html-single/introduction_to_openshift_dedicated/index#instance-types_osd-service-definition)


New version of {{ product_title }} available
:   {{ product_title }} on {{ gcp }} and {{ product_title }} on {{ aws }} versions 4.22 are available for new clusters.


Upgrade channels are available
:   You can choose the new channels option for more precise, version-specific control over your cluster updates. You can target exact minor version paths, such as `stable-4.20` or `fast-4.21`, instead of relying on broader channel groups, which are being deprecated. For more information, see [Channels in {{ product_title }} clusters](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/upgrading/osd-upgrades#osd-upgrading-channels_osd-upgrades).


The `fast` upgrade channel is available as an update option
:   You can choose `fast` as an upgrade channel when creating or updating your {{ product_title }} clusters. The `fast` channel is updated with new versions of {{ product_title }} as soon as Red&#160;Hat declares the version as a general availability (GA) release.


GCNV for {{ VirtProductName }} on {{ GCP }}
:   {{ VirtProductName }} on {{ product_title }} on {{ GCP }} 4.21 and later adds support for [{{ GCP }} NetApp Volumes](https://cloud.google.com/netapp/volumes/docs) (GCNV) as a certified NFS storage backend when you use the NetApp Trident CSI Operator version 26.02.0 or later together with {{ VirtProductName }} 4.21.2 or later.

    GCNV provides NFS-based shared storage that supports ReadWriteMany (RWX) access in `Filesystem` mode. The NetApp Trident CSI driver provisions GCNV storage volumes.

    For more information about using GCNV with {{ VirtProductName }} on {{ GCP }}, see the following articles in the Red&#160;Hat Knowledgebase:

    *   [{{ GCP }} with {{ GCP }} NetApp Volumes - Configuration](https://access.redhat.com/articles/7141472)
    *   [{{ GCP }} with {{ GCP }} NetApp Volumes - Known errors and limits](https://access.redhat.com/articles/7141471)

Support for excluding namespaces from default ingress load controller using label selectors
    :   With this update, you can use the `ocm` CLI to configure default ingress namespace exclusions for your cluster. For more information, see [Configure excluded namespaces for the default ingress controller](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/networking_operators/configuring-ingress#osd-ingress-excluded-namespaces-ocm-cli_configuring-ingress).


Support for new {{ gcp_short }} instances
    :   With this update, you can create clusters with `g2` and `g4` instance types on {{ product_title }} version 4.21 and later. For more information, see [{{ gcp_full }} instance types](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#gcp-compute-types_osd-service-definition).


{{ product_title }} managed DNS zones are available
    :   You can create and manage your own DNS zones for Shared VPC deployments on {{ GCP }}, giving you greater control over your {{ product_title }} cluster’s network configuration and security. This new capability allows you to maintain ownership of your DNS infrastructure while still leveraging the powerful features of {{ product_title }}.
    By using managed DNS zones, you can ensure that your cluster’s DNS records are managed according to your organization’s policies and compliance requirements, without granting broad administrative access to your host projects. This improvement enhances security and provides a more flexible deployment option for customers with strict governance needs.
    To support these managed DNS zones, additional permissions have been added to the Workload Identity Federation (WIF) template for {{ product_title }} versions [4.20](https://github.com/openshift/managed-cluster-config/blob/master/resources/wif/4.20/vanilla.yaml) and [4.21](https://github.com/openshift/managed-cluster-config/blob/master/resources/wif/4.21/vanilla.yaml). The deployer service account now includes the `dns.managedZones.update` permission so that the deployer can perform update operations on managed DNS zones.
    For more information about managed DNS zones for {{ product_title }} on {{ GCP }}, see [Creating a managed DNS zone](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/planning_your_environment/gcp-ccs#ocm-cli-create-managed-dns-zone_gcp-ccs).


Support for new {{ gcp_short }} instances
    :   {{ product_title }} version 4.18 and later adds support for `c2d`, `c3d`, `n2d` and `t2d` instance types on {{ gcp_full }}. For more information, see [{{ gcp_full }} compute types](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#gcp-compute-types_osd-service-definition).
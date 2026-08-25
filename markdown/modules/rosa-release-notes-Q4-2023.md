{%- set _mod_docs_content_type = "REFERENCE" %}
# Q4 2023 {id="rosa-q4-2023_{{ context }}"}

The following items were added during the fourth quarter of 2023. {._abstract}


ROSA CLI update
:   The ROSA CLI (`rosa`) was updated to a new version. For information about what has changed in this release, see the [ROSA CLI release notes](https://github.com/openshift/rosa/releases/tag/v1.2.32). For more information about the ROSA CLI (`rosa`), see [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/#rosa-about_rosa-getting-started-cli).


Delete cluster command enhancement
:   With the release of ROSA CLI (`rosa`) version 1.2.31, the `--best-effort` argument was added, which allows you to force-delete clusters when using the `rosa delete cluster` command. For more information, see [delete cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-delete-cluster_rosa-managing-objects-cli).


{{ hcp_title_first }} that uses {{ hcp }} is now generally available
:   For more information, see [Creating {{ product_title }} clusters using the default options](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/install_clusters/rosa-hcp-sts-creating-a-cluster-quickly).


Configurable process identifier (PID) limits
:   With the release of ROSA CLI (`rosa`) version 1.2.31, administrators can use the `rosa create kubeletconfig` and `rosa edit kubeletconfig` commands to set the maximum PIDs for an existing cluster. For more information, see [Changing the maximum number of process IDs per pod (podPidsLimit) for {{ product_title }}](https://access.redhat.com/articles/7033551).


Configure custom security groups
:   With the release of ROSA CLI (`rosa`) version 1.2.31, administrators can use the `rosa create` command or the OpenShift Cluster Manager to create a new cluster or a new machine pool with up to 5 additional custom security groups. Configuring custom security groups gives administrators greater control over resource access in new clusters and machine pools. For more information, see [Security groups](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#rosa-security-groups_prerequisites).


Command update
:   With the release of ROSA CLI (`rosa`) version 1.2.28, a new command, `rosa describe machinepool`, was added that allows you to check detailed information regarding a specific {{ product_title }} cluster machine pool. For more information, see [describe machinepool](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-describe-machinepool_rosa-managing-objects-cli).


Documentation update
:   The Operators section was added to the {{ product_title }} documentation. Operators are the preferred method of packaging, deploying, and managing services on the control plane. For more information, see [Operators overview](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/operators/index#operators-overview-1).


{{ VirtProductName }} support
:   The release of {{ VirtProductName }} 4.14 added support for running {{ VirtProductName }} on {{ product_title }} clusters. For more information, see [{{ VirtProductName }} on AWS bare metal](https://docs.openshift.com/container-platform/4.14/virt/install/preparing-cluster-for-virt.html#virt-aws-bm_preparing-cluster-for-virt) in the {{ OCP }} documentation.
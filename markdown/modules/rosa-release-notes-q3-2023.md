{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2023 {id="rosa-q3-2023_{{ context }}"}

The following items were added during the third quarter of 2023. {._abstract}


ROSA CLI update
:   The ROSA CLI (`rosa`) was updated to a new version. For information about what has changed in this release, see the [ROSA CLI release notes](https://github.com/openshift/rosa/releases/tag/v1.2.27). For more information about the ROSA CLI (`rosa`), see [About the ROSA CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#rosa-about_rosa-getting-started-cli).


Cluster autoscaling
:   You can now enable cluster autoscaling using {{ product_title }} clusters. Cluster autoscaling automatically adjusts the size of a cluster so that all pods have a place to run, and there are no unneeded nodes. You can enable autoscaling during and after cluster creation using either OpenShift Cluster Manager or the ROSA CLI (`rosa`). For more information, see [Cluster autoscaling](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cluster_administration/index#rosa-cluster-autoscaling).


Shared virtual private clouds
:   {{ product_title }} now supports installing clusters into VPCs shared among AWS accounts that are part of AWS organizations. AWS account installing {{ rosa_classic_title }} clusters can now use shared subnets owned by a management account. For more information, see [Configuring a shared virtual private cloud for {{ product_title }} clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/install_rosa_classic_clusters/index#configuring-a-shared-virtual-private-cloud-for-rosa-classic-architecture-clusters).


Machine pool disk volume size
:   You can now configure your machine pool disk volume size for additional flexibility. You can select your own sizing for the disk volumes of their worker machine pool nodes. For more information, see [Configuring machine pool disk volume](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cluster_administration/index#configuring_machine_pool_disk_volumerosa-managing-worker-nodes).


Machine pool update
:   You can now add taints to the machine pool that is automatically generated during cluster creation. You can also delete this machine pool. This new feature provides more flexibility and cost-effectiveness for cluster administrators, specifically in regards to scaling infrastructure based on changing resource requirements. For more information, see [Creating a machine pool](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cluster_administration/index#creating_a_machine_pool_rosa-managing-worker-nodes).


Documentation update
:   The CLI Tools section was added to the {{ product_title }} documentation and includes more detailed information to help you fully use all of the supported CLI tools. The ROSA CLI section can now be found nested inside the CLI Tools heading. For more information, see [CLI tools overview](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/cli_tools/index#cli-tools-overview-1).


Documentation update
:   The Monitoring section in the documentation was expanded and now includes more detailed information to help you conveniently manage your {{ product_title }} clusters. For more information, see [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/monitoring/#about-ocp-monitoring).
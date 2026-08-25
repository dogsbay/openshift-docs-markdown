{%- set _mod_docs_content_type = "REFERENCE" %}
# Q3 2025 {id="rosa-q3-2025_{{ context }}"}

The following items were added during the third quarter of 2025. {._abstract}

{% if openshift_rosa_hcp %}

New cluster deletion policy
:   {{ product_title }} clusters now have a new deletion policy. This policy is based on a set time period of customer non-response to service notifications. For more information, see [Deletion policy](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/introduction_to_rosa/index#rosa-delete-policy_rosa-hcp-life-cycle). For specific revised terms and conditions, refer to [Product Appendix 4](https://www.redhat.com/licenses/Appendix-4-Red-Hat-Online-Services-20250805.pdf).


Shared VPC for {{ product_title }} clusters
:   You can create {{ product_title }} clusters in shared, centrally-managed AWS virtual private clouds (VPCs). For more information, see [Configuring a shared VPC for ROSA with HCP clusters](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-shared-vpc-config).


Deprecated `--private-link` flags for {{ product_title }} clusters
:   Architectural changes to the ROSA CLI 1.2.55 make networking more flexible for {{ product_title }} clusters. The `--private-link` flag previously used when creating a {{ product_title }} cluster is now deprecated in favor of the `--private` and `--default-ingress-private` flags. Now, users can choose to have a combination of a public or private API with a public or private ingress. For more information, see [Creating a private cluster on {{ product_title }}](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html-single/install_clusters/index#rosa-hcp-aws-private-create-cluster_rosa-hcp-aws-private-creating-cluster).
{% endif %}


Changed default ingress listening method to begin with Day 1 operations
:   Previously, the default ingress listening method was a Day 2 operation. Now, the default ingress listening method is a Day 1 operation.
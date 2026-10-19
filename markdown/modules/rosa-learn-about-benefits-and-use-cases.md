{%- set _mod_docs_content_type = "CONCEPT" %}
# Benefits and use cases {id="rosa-hcp-learn-about-benefits-and-use-cases_{{ context }}"}

{{ product_title }} is a fully-managed turnkey application platform that allows you to focus on what matters most, delivering value to your customers by building and deploying applications. {._abstract}

Red&#160;Hat and AWS Site Reliability Engineering (SRE) experts manage the underlying platform so you do not have to worry about infrastructure management.

{{ product_title }} provides seamless integration with a wide range of AWS compute, database, analytics, machine learning, networking, mobile, AI and other services to further accelerate the building and delivering of differentiating experiences to your customers.

{{ product_title }} offers a reduced-cost solution to create a managed {{ product_title }} cluster with a focus on efficiency and security. You can quickly create a new cluster and deploy applications in minutes.

You subscribe to the service directly from your AWS account. After you create clusters, you can operate your clusters with the {{ OCP_short }} web console, the {{ rosa_cli_first }}, or through {{ cluster_manager_first }}.

You receive {{ OCP_short }} updates with new feature releases and a shared, common source for alignment with {{ OCP }}. {{ product_title }} supports the same versions of {{ OCP_short }} as Red&#160;Hat {{ OCP }} to achieve version consistency.

{{ product_title }} uses AWS Security Token Service (STS) with AWS Identity and Access Management (IAM) to obtain credentials to manage infrastructure in your AWS account. AWS STS is a global web service that creates temporary credentials for IAM users/roles or federated users/roles. {{ product_title }} uses this to assign short-term, limited-privilege, security credentials.

These credentials are associated with IAM roles that are specific to each component that makes AWS API calls. This method aligns with the principals of least privilege and secure practices in cloud service resource management. The {{ rosa_cli }} tool manages the STS credentials that are assigned for unique tasks and takes action on AWS resources as part of {{ OCP_short }} functionality. For a more detailed explanation, see "AWS STS and {{ product_title }} explained" in the _Additional resources_.

**Additional resources**
{._additional-resources}

*   [{{ product_title }} product page](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws)
*   [AWS product page](https://aws.amazon.com/rosa/)
*   [Red&#160;Hat Customer Portal](https://access.redhat.com/products/red-hat-openshift-service-aws)
*   [Red&#160;Hat Developer learning portal - {{ ocp_short }} and Kubernetes learning](https://developers.redhat.com/learn/openshift)
*   [AWS STS and {{ product_title }} explained](/rosa_architecture/cloud-experts-rosa-hcp-sts-explained#cloud-experts-rosa-hcp-sts-explained)
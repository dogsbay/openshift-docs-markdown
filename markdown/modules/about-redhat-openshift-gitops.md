{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ gitops_title }} {id="about-redhat-openshift-gitops_{{ context }}"}

{{ gitops_title }} ensures consistency in applications when you deploy them to different clusters in different environments, such as: development, staging, and production. {{ gitops_title }} organizes the deployment process around the configuration repositories and makes them the central element. It always has at least two repositories:

1.  Application repository with the source code
1.  Environment configuration repository that defines the desired state of the application

These repositories contain a declarative description of the infrastructure you need in your specified environment. They also contain an automated process to make your environment match the described state.

{{ gitops_title }} uses Argo CD to maintain cluster resources. Argo CD is an open-source declarative tool for the continuous integration and continuous deployment (CI/CD) of applications. {{ gitops_title }} implements Argo CD as a controller so that it continuously monitors application definitions and configurations defined in a Git repository. Then, Argo CD compares the specified state of these configurations with their live state on the cluster.

Argo CD reports any configurations that deviate from their specified state. These reports allow administrators to automatically or manually resync configurations to the defined state. Therefore, Argo CD enables you to deliver global custom resources, like the resources that are used to configure {{ product_title }} clusters.

## Key features {id="key-features_{{ context }}"}

{{ gitops_title }} helps you automate the following tasks:

*   Ensure that the clusters have similar states for configuration, monitoring, and storage
*   Apply or revert configuration changes to multiple {{ product_title }} clusters
*   Associate templated configuration with different environments
*   Promote applications across clusters, from staging to production
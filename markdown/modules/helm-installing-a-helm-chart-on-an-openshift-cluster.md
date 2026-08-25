{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing a Helm chart on an {{ product_title }} cluster {id="installing-a-helm-chart-on-an-openshift-cluster_{{ context }}"}

**Prerequisites**

*   You have a running {{ product_title }} cluster and you have logged into it.
*   You have installed Helm.

**Procedure**

1.  Create a new project:
    ```terminal
    $ oc new-project vault
    ```
1.  Add a repository of Helm charts to your local Helm client:
    ```terminal
    $ helm repo add openshift-helm-charts https://charts.openshift.io/
    ```
    ```terminal title="Example output"
    "openshift-helm-charts" has been added to your repositories
    ```
1.  Update the repository:
    ```terminal
    $ helm repo update
    ```
1.  Install an example HashiCorp Vault:
    ```terminal
    $ helm install example-vault openshift-helm-charts/hashicorp-vault
    ```
    ```terminal title="Example output"
    NAME: example-vault
    LAST DEPLOYED: Fri Mar 11 12:02:12 2022
    NAMESPACE: vault
    STATUS: deployed
    REVISION: 1
    NOTES:
    Thank you for installing HashiCorp Vault!
    ```
1.  Verify that the chart has installed successfully:
    ```terminal
    $ helm list
    ```
    ```terminal title="Example output"
    NAME         	NAMESPACE	REVISION	UPDATED                                	STATUS  	CHART       	APP VERSION
    example-vault	vault    	1       	2022-03-11 12:02:12.296226673 +0530 IST	deployed	vault-0.19.0	1.9.2
    ```
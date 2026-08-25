{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom Helm chart on {{ product_title }} {id="creating-a-custom-helm-chart-on-openshift_{{ context }}"}

**Procedure**

1.  Create a new project:
    ```terminal
    $ oc new-project nodejs-ex-k
    ```
1.  Download an example Node.js chart that contains {{ product_title }} objects:
    ```terminal
    $ git clone https://github.com/redhat-developer/redhat-helm-charts
    ```
1.  Go to the directory with the sample chart:
    ```terminal
    $ cd redhat-helm-charts/alpha/nodejs-ex-k/
    ```
1.  Edit the `Chart.yaml` file  and add a description of your chart:
    ```yaml
    apiVersion: v2 (1)
    name: nodejs-ex-k (2)
    description: A Helm chart for OpenShift (3)
    icon: https://static.redhat.com/libs/redhat/brand-assets/latest/corp/logo.svg (4)
    version: 0.2.1 (5)
    ```
    1.  The chart API version. It should be `v2` for Helm charts that require at least Helm 3.
    1.  The name of your chart.
    1.  The description of your chart.
    1.  The URL to an image to be used as an icon.
    1.  The Version of your chart as per the Semantic Versioning (SemVer) 2.0.0 Specification.
1.  Verify that the chart is formatted properly:
    ```terminal
    $ helm lint
    ```
    ```terminal title="Example output"
    [INFO] Chart.yaml: icon is recommended

    1 chart(s) linted, 0 chart(s) failed
    ```
1.  Navigate to the previous directory level:
    ```terminal
    $ cd ..
    ```
1.  Install the chart:
    ```terminal
    $ helm install nodejs-chart nodejs-ex-k
    ```
1.  Verify that the chart has installed successfully:
    ```terminal
    $ helm list
    ```
    ```terminal title="Example output"
    NAME NAMESPACE REVISION UPDATED STATUS CHART APP VERSION
    nodejs-chart nodejs-ex-k 1 2019-12-05 15:06:51.379134163 -0500 EST deployed nodejs-0.1.0  1.16.0
    ```
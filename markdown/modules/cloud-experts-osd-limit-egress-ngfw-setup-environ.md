{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up your environment {id="cloud-experts-osd-limit-egress-ngfw-setup-environ_{{ context }}"}

Set environment variables so each command in this tutorial uses the same values for {{ product_title }} on {{ GCP }} with your firewall rules. {._abstract}

**Prerequisites**

*   You have the {{ GCP }} command-line interface (CLI) (`gcloud`) installed.
*   You are logged into the {{ GCP }} CLI and have selected the {{ GCP }} project where you plan to deploy {{ product_title }}.
*   You have the minimum necessary permissions in {{ GCP }}, including:
    *   `Compute Network Admin`
    *   `Domain Name System (DNS) Administrator`
*   You enabled the required {{ GCP }} services:
    *   `networksecurity.googleapis.com`
    *   `networkservices.googleapis.com`
    *   `servicenetworking.googleapis.com`

        You can enable these services by running the following commands:
        ```terminal
        $ gcloud services enable networksecurity.googleapis.com
        $ gcloud services enable networkservices.googleapis.com
        $ gcloud services enable servicenetworking.googleapis.com
        ```

**Procedure**

*   Run this command to set the environment variables:
    ```terminal
    $ export project_id=$(gcloud config list --format="value(core.project)")
    $ export region=us-east1
    $ export prefix=osd-ngfw
    $ export service_cidr="172.30.0.0/16"
    $ export machine_cidr="10.0.0.0/22"
    $ export pod_cidr="10.128.0.0/14"
    ```

    This example sets the region to `us-east1` and the name prefix to `osd-ngfw`. The service and pod networks use the default Classless Inter-Domain Routing (CIDR) ranges in the export list. You add subnet ranges later in this tutorial. The machine CIDR must fit inside those subnet ranges. Change the exports to match your project.
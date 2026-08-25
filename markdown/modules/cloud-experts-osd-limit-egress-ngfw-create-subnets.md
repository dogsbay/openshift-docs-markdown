{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the VPC and subnets {id="cloud-experts-osd-limit-egress-ngfw-create-subnets_{{ context }}"}

Create the Virtual Private Cloud (VPC) and subnets required for deploying {{ GCP }} Next Generation Firewall (NGFW) with {{ product_title }}. {._abstract}

**Procedure**

1.  Create the VPC by running the following command:
    ```terminal
    $ gcloud compute networks create ${prefix}-vpc --subnet-mode=custom
    ```
1.  Create the worker subnets by running the following command:
    ```terminal
    $ gcloud compute networks subnets create ${prefix}-worker \
        --range=10.0.2.0/23 \
        --network=${prefix}-vpc \
        --region=${region} \
        --enable-private-ip-google-access
    ```
1.  Create the control plane subnets by running the following command:
    ```terminal
    $ gcloud compute networks subnets create ${prefix}-control-plane \
        --range=10.0.0.0/25 \
        --network=${prefix}-vpc \
        --region=${region} \
        --enable-private-ip-google-access
    ```
1.  Create the Private Service Connect (PSC) subnets by running the following command:
    ```terminal
    $ gcloud compute networks subnets create ${prefix}-psc \
        --network=${prefix}-vpc \
        --region=${region} \
        --stack-type=IPV4_ONLY \
        --range=10.0.0.128/29 \
        --purpose=PRIVATE_SERVICE_CONNECT

    ```

    These examples use the subnet ranges of 10.0.2.0/23 for the worker subnet, 10.0.0.0/25 for the control plane subnet, and 10.0.0.128/29 for the PSC subnet. Modify the parameters to meet your needs. Ensure the parameter values are contained within the machine CIDR you set earlier in this tutorial.

**Verification**

*   Verify the VPC and subnets were created by running the following command:
    ```terminal
    $ gcloud compute networks subnets list --network=${prefix}-vpc
    ```

    The output shows the three subnets you created with their internet protocol (IP) ranges and regions.
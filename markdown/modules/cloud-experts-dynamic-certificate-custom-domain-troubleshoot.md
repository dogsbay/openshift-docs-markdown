{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting dynamic certificate provisioning {id="cloud-experts-dynamic-certificate-custom-domain-troubleshoot_{{ context }}"}


:::note

The validation process usually takes 2-3 minutes to complete while creating certificates.

:::


If annotating your route does not trigger certificate creation during the certificate create step, run `oc describe` against each of the `certificate`,`certificaterequest`,`order`, and `challenge` resources to view the events or reasons that can help identify the cause of the issue. {._abstract}

**Procedure**

*   Run the following command to trigger certificate creation:
    ```terminal
    $ oc get certificate,certificaterequest,order,challenge
    ```

    For troubleshooting, you can refer to this [helpful guide in debugging certificates](https://cert-manager.io/docs/faq/acme/).

    You can also use the [cmctl](https://cert-manager.io/docs/reference/cmctl/) CLI tool for various certificate management activities, such as checking the status of certificates and testing renewals.
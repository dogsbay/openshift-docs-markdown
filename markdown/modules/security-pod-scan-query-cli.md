{%- set _mod_docs_content_type = "PROCEDURE" %}
# Querying image vulnerabilities from the CLI {id="security-pod-scan-query-cli_{{ context }}"}

You can display information about vulnerabilities detected by the {{ rhq_cso }} by using the `oc` command. {._abstract}

**Prerequisites**

*   You have installed the {{ rhq_cso }} on your {{ product_title }} instance.

**Procedure**

1.  Enter the following command to query for detected container image vulnerabilities:
    ```terminal
    $ oc get vuln --all-namespaces
    ```
    ```terminal title="Example output"
    NAMESPACE     NAME              AGE
    default       sha256.ca90...    6m56s
    skynet        sha256.ca90...    9m37s
    ```
1.  To display details for a particular vulnerability, append the vulnerability name and its namespace to the `oc describe` command. The following example shows an active container whose image includes an RPM package with a vulnerability:
    ```terminal
    $ oc describe vuln --namespace mynamespace sha256.ac50e3752...
    ```
    ```terminal title="Example output"
    Name:         sha256.ac50e3752...
    Namespace:    quay-enterprise
    ...
    Spec:
      Features:
        Name:            nss-util
        Namespace Name:  centos:7
        Version:         3.44.0-3.el7
        Versionformat:   rpm
        Vulnerabilities:
          Description: Network Security Services (NSS) is a set of libraries...
    ```
{%- set _mod_docs_content_type = "PROCEDURE" %}
# Checking DNS Operator status {id="nw-dns-operator-status_{{ context }}"}

You can inspect the status and view the details of the DNS Operator by using the `oc describe` command. {._abstract}

**Procedure**

*   View the status of the DNS Operator:
    ```terminal
    $ oc describe clusteroperators/dns
    ```

    Though the messages and spelling might vary in a specific release, the expected status output looks like:
    ```terminal
    Status:
      Conditions:
        Last Transition Time:  <date>
        Message:               DNS "default" is available.
        Reason:                AsExpected
        Status:                True
        Type:                  Available
        Last Transition Time:  <date>
        Message:               Desired and current number of DNSes are equal
        Reason:                AsExpected
        Status:                False
        Type:                  Progressing
        Last Transition Time:  <date>
        Reason:                DNSNotDegraded
        Status:                False
        Type:                  Degraded
        Last Transition Time:  <date>
        Message:               DNS default is upgradeable: DNS Operator can be upgraded
        Reason:                DNSUpgradeable
        Status:                True
        Type:                  Upgradeable
    ```
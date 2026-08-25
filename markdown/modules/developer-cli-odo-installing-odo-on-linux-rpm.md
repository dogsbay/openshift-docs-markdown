{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing {{ odo_title }} on {{ op_system_base_full }} using an RPM {id="installing-odo-on-linux-rpm_{{ context }}"}

For {{ op_system_base_full }}, you can install the `{{ odo_title }}`{minja} CLI as an RPM.

**Procedure**

1.  Register with Red Hat Subscription Manager:
    ```terminal
    # subscription-manager register
    ```
1.  Pull the latest subscription data:
    ```terminal
    # subscription-manager refresh
    ```
1.  List the available subscriptions:
    ```terminal
    # subscription-manager list --available --matches '*OpenShift Developer Tools and Services*'
    ```
1.  In the output of the previous command, find the  `Pool ID` field for your {{ product_title }} subscription and attach the subscription to the registered system:
    ```terminal
    # subscription-manager attach --pool=<pool_id>
    ```
1.  Enable the repositories required by `{{ odo_title }}`{minja}:
    ```terminal {minja}
    # subscription-manager repos --enable="ocp-tools-{{ product_version }}-for-rhel-8-x86_64-rpms"
    ```
1.  Install the `{{ odo_title }}`{minja} package:
    ```terminal
    # yum install odo
    ```
1.  Verify that `{{ odo_title }}`{minja} is now available on your system:
    ```terminal
    $ odo version
    ```
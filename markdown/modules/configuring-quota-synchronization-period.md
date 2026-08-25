{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring quota synchronization period {id="configuring-quota-synchronization-period_{{ context }}"}

When a set of resources are deleted, the synchronization time frame of resources is determined by the `resource-quota-sync-period` setting in the `/etc/origin/master/master-config.yaml` file. You can change the `resource-quota-sync-period` setting to have the set of resources regenerate in the needed amount of time (in seconds) for the resources to be once again available. {._abstract}


:::note

Before quota usage is restored, you might encounter problems when attempting to reuse the resources.

:::


Adjusting the regeneration time can be helpful for creating resources and determining resource usage when automation is used.


:::note

The `resource-quota-sync-period` setting balances system performance. Reducing the sync period can result in a heavy load on the controller.

:::


**Procedure**

1.  To specify the time required for resources to regenerate and become available again, edit the `resource-quota-sync-period` setting. With this configuration, you can set the synchronization interval in seconds.
    ```yaml title="Example of the resource-quota-sync-period setting"
    kubernetesMasterConfig:
      apiLevels:
      - v1beta3
      - v1
      apiServerArguments: null
      controllerArguments:
        resource-quota-sync-period:
          - "10s"
    # ...
    ```
1.  Restart the controller services to apply them to your cluster by entering the following commands:
    ```terminal
    $ master-restart api
    ```
    ```terminal
    $ master-restart controllers
    ```
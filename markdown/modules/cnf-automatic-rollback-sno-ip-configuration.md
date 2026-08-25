{%- set _mod_docs_content_type = "REFERENCE" %}
# Automatic rollback mechanisms for network reconfiguration {id="cnf-automatic-rollback-sno-ip-configuration_{{ context }}"}

Network reconfiguration includes many automatic rollback safety mechanisms that help protect your cluster from failed configuration changes. {._abstract}


Automatic rollback on post-pivot failure
:   If network configuration or certificate regeneration fails after the reboot, the system automatically triggers a rollback to the earlier stateroot.


Init-monitor timeout rollback
:   If the network reconfiguration does not complete within the configured timeout, the system automatically triggers a rollback. The default timeout is 1800 seconds, 30 minutes. You can configure this timeout by using the `spec.autoRollbackOnFailure.initMonitorTimeoutSeconds` field in the `IPConfig` CR. Setting the value to `0` uses the default timeout.
{%- set _mod_docs_content_type = "CONCEPT" %}
# Red&#160;Hat managed resources {id="sd-redhat-managed-resources_{{ context }}"}

{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "sd-managed-resources" %}

## Overview {id="sd-managed-resources-overview_{{ context }}"}

The following covers all {{ product_title }} resources that are managed or protected by the Service Reliability Engineering Platform (SRE-P) Team. Customers should not try to change these resources because doing so can lead to cluster instability.

## Managed resources {id="sd-managed-resources-all_{{ context }}"}

The following list displays the {{ product_title }} resources managed by OpenShift Hive, the centralized fleet configuration management system. These resources are in addition to the OpenShift/ROSA platform resources created during installation. OpenShift Hive continually reconciles consistency across all {{ product_title }} clusters. Changes to {{ product_title }} resources should be made through {{ cluster_manager }} so that {{ cluster_manager }} and Hive are synchronized. Contact ocm-feedback@redhat.com if {{ cluster_manager }} does not support modifying the resources in question.

**List of Red&#160;Hat managed resources**

(Note that the following may not be visible in your ROSA cluster)
<details>
<summary>Details</summary>

```yaml
```yaml
Resources:
  ConfigMap:
  - namespace: openshift-config
    name: rosa-brand-logo
  - namespace: openshift-console
    name: custom-logo
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-config
  - namespace: openshift-file-integrity
    name: fr-aide-conf
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator-config
  - namespace: openshift-monitoring
    name: cluster-monitoring-config
  - namespace: openshift-monitoring
    name: managed-namespaces
  - namespace: openshift-monitoring
    name: ocp-namespaces
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter-code
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter-trusted-ca-bundle
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter-code
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter-trusted-ca-bundle
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols-code
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols-trusted-ca-bundle
  - namespace: openshift-security
    name: osd-audit-policy
  - namespace: openshift-validation-webhook
    name: webhook-cert
  - namespace: openshift
    name: motd
  Endpoints:
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-metrics
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  - namespace: openshift-scanning
    name: loggerservice
  - namespace: openshift-security
    name: audit-exporter
  - namespace: openshift-validation-webhook
    name: validation-webhook
  Namespace:
  - name: dedicated-admin
  - name: openshift-addon-operator
  - name: openshift-aqua
  - name: openshift-aws-vpce-operator
  - name: openshift-backplane
  - name: openshift-backplane-cee
  - name: openshift-backplane-csa
  - name: openshift-backplane-cse
  - name: openshift-backplane-csm
  - name: openshift-backplane-managed-scripts
  - name: openshift-backplane-mobb
  - name: openshift-backplane-srep
  - name: openshift-backplane-srep-ro
  - name: openshift-backplane-tam
  - name: openshift-cloud-ingress-operator
  - name: openshift-codeready-workspaces
  - name: openshift-compliance
  - name: openshift-compliance-monkey
  - name: openshift-container-security
  - name: openshift-custom-domains-operator
  - name: openshift-customer-monitoring
  - name: openshift-deployment-validation-operator
  - name: openshift-managed-node-metadata-operator
  - name: openshift-file-integrity
  - name: openshift-logging
  - name: openshift-managed-upgrade-operator
  - name: openshift-must-gather-operator
  - name: openshift-observability-operator
  - name: openshift-ocm-agent-operator
  - name: openshift-operators-redhat
  - name: openshift-osd-metrics
  - name: openshift-rbac-permissions
  - name: openshift-route-monitor-operator
  - name: openshift-scanning
  - name: openshift-security
  - name: openshift-splunk-forwarder-operator
  - name: openshift-sre-pruning
  - name: openshift-suricata
  - name: openshift-validation-webhook
  - name: openshift-velero
  - name: openshift-monitoring
  - name: openshift
  - name: openshift-cluster-version
  - name: keycloak
  - name: goalert
  - name: configure-goalert-operator
  ReplicationController:
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter-1
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols-1
  Secret:
  - namespace: openshift-authentication
    name: v4-0-config-user-idp-0-file-data
  - namespace: openshift-authentication
    name: v4-0-config-user-template-error
  - namespace: openshift-authentication
    name: v4-0-config-user-template-login
  - namespace: openshift-authentication
    name: v4-0-config-user-template-provider-selection
  - namespace: openshift-config
    name: htpasswd-secret
  - namespace: openshift-config
    name: osd-oauth-templates-errors
  - namespace: openshift-config
    name: osd-oauth-templates-login
  - namespace: openshift-config
    name: osd-oauth-templates-providers
  - namespace: openshift-config    
    name: rosa-oauth-templates-errors
  - namespace: openshift-config
    name: rosa-oauth-templates-login
  - namespace: openshift-config
    name: rosa-oauth-templates-providers
  - namespace: openshift-config
    name: support       
  - namespace: openshift-config
    name: tony-devlab-primary-cert-bundle-secret
  - namespace: openshift-ingress
    name: tony-devlab-primary-cert-bundle-secret
  - namespace: openshift-kube-apiserver
    name: user-serving-cert-000
  - namespace: openshift-kube-apiserver
    name: user-serving-cert-001
  - namespace: openshift-monitoring
    name: dms-secret
  - namespace: openshift-monitoring
    name: observatorium-credentials
  - namespace: openshift-monitoring
    name: pd-secret
  - namespace: openshift-scanning
    name: clam-secrets
  - namespace: openshift-scanning
    name: logger-secrets
  - namespace: openshift-security
    name: splunk-auth
  ServiceAccount:
  - namespace: openshift-backplane-managed-scripts
    name: osd-backplane
  - namespace: openshift-backplane-srep
    name: 6804d07fb268b8285b023bcf65392f0e
  - namespace: openshift-backplane-srep
    name: osd-delete-ownerrefs-serviceaccounts
  - namespace: openshift-backplane
    name: osd-delete-backplane-serviceaccounts
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-custom-domains-operator
    name: custom-domains-operator
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator
  - namespace: openshift-machine-api
    name: osd-disable-cpms
  - namespace: openshift-marketplace
    name: osd-patch-subscription-source
  - namespace: openshift-monitoring
    name: configure-alertmanager-operator
  - namespace: openshift-monitoring
    name: osd-cluster-ready
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  - namespace: openshift-network-diagnostics
    name: sre-pod-network-connectivity-check-pruner
  - namespace: openshift-ocm-agent-operator
    name: ocm-agent-operator
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator
  - namespace: openshift-splunk-forwarder-operator
    name: splunk-forwarder-operator
  - namespace: openshift-sre-pruning
    name: bz1980755
  - namespace: openshift-scanning
    name: logger-sa
  - namespace: openshift-scanning
    name: scanner-sa
  - namespace: openshift-sre-pruning
    name: sre-pruner-sa
  - namespace: openshift-suricata
    name: suricata-sa
  - namespace: openshift-validation-webhook
    name: validation-webhook
  - namespace: openshift-velero
    name: managed-velero-operator
  - namespace: openshift-velero
    name: velero
  - namespace: openshift-backplane-srep
    name: UNIQUE_BACKPLANE_SERVICEACCOUNT_ID
  Service:
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-metrics
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  - namespace: openshift-scanning
    name: loggerservice
  - namespace: openshift-security
    name: audit-exporter
  - namespace: openshift-validation-webhook
    name: validation-webhook
  AddonOperator:
  - name: addon-operator
  ValidatingWebhookConfiguration:
  - name: sre-hiveownership-validation
  - name: sre-namespace-validation
  - name: sre-pod-validation
  - name: sre-prometheusrule-validation
  - name: sre-regular-user-validation
  - name: sre-scc-validation
  - name: sre-techpreviewnoupgrade-validation
  DaemonSet:
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-scanning
    name: logger
  - namespace: openshift-scanning
    name: scanner
  - namespace: openshift-security
    name: audit-exporter
  - namespace: openshift-suricata
    name: suricata
  - namespace: openshift-validation-webhook
    name: validation-webhook
  DeploymentConfig:
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  ClusterRoleBinding:
  - name: aqua-scanner-binding
  - name: backplane-cluster-admin
  - name: backplane-impersonate-cluster-admin
  - name: bz1980755
  - name: configure-alertmanager-operator-prom
  - name: dedicated-admins-cluster
  - name: dedicated-admins-registry-cas-cluster
  - name: logger-clusterrolebinding
  - name: openshift-backplane-managed-scripts-reader
  - name: osd-cluster-admin
  - name: osd-cluster-ready
  - name: osd-delete-backplane-script-resources
  - name: osd-delete-ownerrefs-serviceaccounts
  - name: osd-patch-subscription-source
  - name: osd-rebalance-infra-nodes
  - name: pcap-dedicated-admins
  - name: splunk-forwarder-operator
  - name: splunk-forwarder-operator-clusterrolebinding
  - name: sre-pod-network-connectivity-check-pruner
  - name: sre-pruner-buildsdeploys-pruning
  - name: velero
  - name: webhook-validation
  ClusterRole:
  - name: backplane-cee-readers-cluster
  - name: backplane-impersonate-cluster-admin
  - name: backplane-readers-cluster
  - name: backplane-srep-admins-cluster
  - name: backplane-srep-admins-project
  - name: bz1980755
  - name: dedicated-admins-aggregate-cluster
  - name: dedicated-admins-aggregate-project
  - name: dedicated-admins-cluster
  - name: dedicated-admins-manage-operators
  - name: dedicated-admins-project
  - name: dedicated-admins-registry-cas-cluster
  - name: dedicated-readers
  - name: image-scanner
  - name: logger-clusterrole
  - name: openshift-backplane-managed-scripts-reader
  - name: openshift-splunk-forwarder-operator
  - name: osd-cluster-ready
  - name: osd-custom-domains-dedicated-admin-cluster
  - name: osd-delete-backplane-script-resources
  - name: osd-delete-backplane-serviceaccounts
  - name: osd-delete-ownerrefs-serviceaccounts
  - name: osd-get-namespace
  - name: osd-netnamespaces-dedicated-admin-cluster
  - name: osd-patch-subscription-source
  - name: osd-readers-aggregate
  - name: osd-rebalance-infra-nodes
  - name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - name: pcap-dedicated-admins
  - name: splunk-forwarder-operator
  - name: sre-allow-read-machine-info
  - name: sre-pruner-buildsdeploys-cr
  - name: webhook-validation-cr
  RoleBinding:
  - namespace: kube-system
    name: cloud-ingress-operator-cluster-config-v1-reader
  - namespace: kube-system
    name: managed-velero-operator-cluster-config-v1-reader
  - namespace: openshift-aqua
    name: dedicated-admins-openshift-aqua
  - namespace: openshift-backplane-managed-scripts
    name: backplane-cee-mustgather
  - namespace: openshift-backplane-managed-scripts
    name: backplane-srep-mustgather
  - namespace: openshift-backplane-managed-scripts
    name: osd-delete-backplane-script-resources
  - namespace: openshift-cloud-ingress-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-codeready-workspaces
    name: dedicated-admins-openshift-codeready-workspaces
  - namespace: openshift-config
    name: dedicated-admins-project-request
  - namespace: openshift-config
    name: dedicated-admins-registry-cas-project
  - namespace: openshift-config
    name: muo-pullsecret-reader
  - namespace: openshift-config
    name: oao-openshiftconfig-reader
  - namespace: openshift-config
    name: osd-cluster-ready
  - namespace: openshift-custom-domains-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-customer-monitoring
    name: dedicated-admins-openshift-customer-monitoring
  - namespace: openshift-customer-monitoring
    name: prometheus-k8s-openshift-customer-monitoring
  - namespace: openshift-dns
    name: dedicated-admins-openshift-dns
  - namespace: openshift-dns
    name: osd-rebalance-infra-nodes-openshift-dns
  - namespace: openshift-image-registry
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-ingress
    name: cloud-ingress-operator
  - namespace: openshift-kube-apiserver
    name: cloud-ingress-operator
  - namespace: openshift-machine-api
    name: cloud-ingress-operator
  - namespace: openshift-logging
    name: admin-dedicated-admins
  - namespace: openshift-logging
    name: admin-system:serviceaccounts:dedicated-admin
  - namespace: openshift-logging
    name: openshift-logging-dedicated-admins
  - namespace: openshift-logging
    name: openshift-logging:serviceaccounts:dedicated-admin
  - namespace: openshift-machine-api
    name: osd-cluster-ready
  - namespace: openshift-machine-api
    name: sre-ebs-iops-reporter-read-machine-info
  - namespace: openshift-machine-api
    name: sre-stuck-ebs-vols-read-machine-info
  - namespace: openshift-managed-node-metadata-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-machine-api
    name: osd-disable-cpms
  - namespace: openshift-marketplace
    name: dedicated-admins-openshift-marketplace
  - namespace: openshift-monitoring
    name: backplane-cee
  - namespace: openshift-monitoring
    name: muo-monitoring-reader
  - namespace: openshift-monitoring
    name: oao-monitoring-manager
  - namespace: openshift-monitoring
    name: osd-cluster-ready
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes-openshift-monitoring
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  - namespace: openshift-must-gather-operator
    name: backplane-cee-mustgather
  - namespace: openshift-must-gather-operator
    name: backplane-srep-mustgather
  - namespace: openshift-must-gather-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-network-diagnostics
    name: sre-pod-network-connectivity-check-pruner
  - namespace: openshift-network-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-ocm-agent-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-operators-redhat
    name: admin-dedicated-admins
  - namespace: openshift-operators-redhat
    name: admin-system:serviceaccounts:dedicated-admin
  - namespace: openshift-operators-redhat
    name: openshift-operators-redhat-dedicated-admins
  - namespace: openshift-operators-redhat
    name: openshift-operators-redhat:serviceaccounts:dedicated-admin
  - namespace: openshift-operators
    name: dedicated-admins-openshift-operators
  - namespace: openshift-osd-metrics
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-osd-metrics
    name: prometheus-k8s
  - namespace: openshift-rbac-permissions
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-rbac-permissions
    name: prometheus-k8s
  - namespace: openshift-route-monitor-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-scanning
    name: scanner-rolebinding
  - namespace: openshift-security
    name: osd-rebalance-infra-nodes-openshift-security
  - namespace: openshift-security
    name: prometheus-k8s
  - namespace: openshift-splunk-forwarder-operator
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-suricata
    name: suricata-rolebinding
  - namespace: openshift-user-workload-monitoring
    name: dedicated-admins-uwm-config-create
  - namespace: openshift-user-workload-monitoring
    name: dedicated-admins-uwm-config-edit
  - namespace: openshift-user-workload-monitoring
    name: dedicated-admins-uwm-managed-am-secret
  - namespace: openshift-user-workload-monitoring
    name: osd-rebalance-infra-nodes-openshift-user-workload-monitoring
  - namespace: openshift-velero
    name: osd-rebalance-infra-nodes-openshift-pod-rebalance
  - namespace: openshift-velero
    name: prometheus-k8s
  Role:
  - namespace: kube-system
    name: cluster-config-v1-reader
  - namespace: kube-system
    name: cluster-config-v1-reader-cio
  - namespace: openshift-aqua
    name: dedicated-admins-openshift-aqua
  - namespace: openshift-backplane-managed-scripts
    name: backplane-cee-pcap-collector
  - namespace: openshift-backplane-managed-scripts
    name: backplane-srep-pcap-collector
  - namespace: openshift-backplane-managed-scripts
    name: osd-delete-backplane-script-resources
  - namespace: openshift-codeready-workspaces
    name: dedicated-admins-openshift-codeready-workspaces
  - namespace: openshift-config
    name: dedicated-admins-project-request
  - namespace: openshift-config
    name: dedicated-admins-registry-cas-project
  - namespace: openshift-config
    name: muo-pullsecret-reader
  - namespace: openshift-config
    name: oao-openshiftconfig-reader
  - namespace: openshift-config
    name: osd-cluster-ready
  - namespace: openshift-customer-monitoring
    name: dedicated-admins-openshift-customer-monitoring
  - namespace: openshift-customer-monitoring
    name: prometheus-k8s-openshift-customer-monitoring
  - namespace: openshift-dns
    name: dedicated-admins-openshift-dns
  - namespace: openshift-dns
    name: osd-rebalance-infra-nodes-openshift-dns
  - namespace: openshift-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-ingress
    name: cloud-ingress-operator
  - namespace: openshift-kube-apiserver
    name: cloud-ingress-operator
  - namespace: openshift-machine-api
    name: cloud-ingress-operator
  - namespace: openshift-logging
    name: dedicated-admins-openshift-logging
  - namespace: openshift-machine-api
    name: osd-cluster-ready
  - namespace: openshift-machine-api
    name: osd-disable-cpms
  - namespace: openshift-marketplace
    name: dedicated-admins-openshift-marketplace
  - namespace: openshift-monitoring
    name: backplane-cee
  - namespace: openshift-monitoring
    name: muo-monitoring-reader
  - namespace: openshift-monitoring
    name: oao-monitoring-manager
  - namespace: openshift-monitoring
    name: osd-cluster-ready
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes-openshift-monitoring
  - namespace: openshift-must-gather-operator
    name: backplane-cee-mustgather
  - namespace: openshift-must-gather-operator
    name: backplane-srep-mustgather
  - namespace: openshift-network-diagnostics
    name: sre-pod-network-connectivity-check-pruner
  - namespace: openshift-operators
    name: dedicated-admins-openshift-operators
  - namespace: openshift-osd-metrics
    name: prometheus-k8s
  - namespace: openshift-rbac-permissions
    name: prometheus-k8s
  - namespace: openshift-scanning
    name: scanner-role
  - namespace: openshift-security
    name: osd-rebalance-infra-nodes-openshift-security
  - namespace: openshift-security
    name: prometheus-k8s
  - namespace: openshift-suricata
    name: suricata-role
  - namespace: openshift-user-workload-monitoring
    name: dedicated-admins-user-workload-monitoring-create-cm
  - namespace: openshift-user-workload-monitoring
    name: dedicated-admins-user-workload-monitoring-manage-am-secret
  - namespace: openshift-user-workload-monitoring
    name: osd-rebalance-infra-nodes-openshift-user-workload-monitoring
  - namespace: openshift-velero
    name: prometheus-k8s
  CronJob:
  - namespace: openshift-backplane-managed-scripts
    name: osd-delete-backplane-script-resources
  - namespace: openshift-backplane-srep
    name: osd-delete-ownerrefs-serviceaccounts
  - namespace: openshift-backplane
    name: osd-delete-backplane-serviceaccounts
  - namespace: openshift-machine-api
    name: osd-disable-cpms
  - namespace: openshift-marketplace
    name: osd-patch-subscription-source
  - namespace: openshift-monitoring
    name: osd-rebalance-infra-nodes
  - namespace: openshift-network-diagnostics
    name: sre-pod-network-connectivity-check-pruner
  - namespace: openshift-sre-pruning
    name: builds-pruner
  - namespace: openshift-sre-pruning
    name: bz1980755
  - namespace: openshift-sre-pruning
    name: deployments-pruner
  Job:
  - namespace: openshift-monitoring
    name: osd-cluster-ready
  CredentialsRequest:
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator-credentials-aws
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator-credentials-gcp
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter-aws-credentials
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols-aws-credentials
  - namespace: openshift-velero
    name: managed-velero-operator-iam-credentials-aws
  - namespace: openshift-velero
    name: managed-velero-operator-iam-credentials-gcp
  APIScheme:
  - namespace: openshift-cloud-ingress-operator
    name: rh-api
  PublishingStrategy:
  - namespace: openshift-cloud-ingress-operator
    name: publishingstrategy
  ScanSettingBinding:
  - namespace: openshift-compliance
    name: fedramp-high-ocp
  - namespace: openshift-compliance
    name: fedramp-high-rhcos
  ScanSetting:
  - namespace: openshift-compliance
    name: osd
  TailoredProfile:
  - namespace: openshift-compliance
    name: rhcos4-high-rosa
  OAuth:
  - name: cluster
  EndpointSlice:
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-metrics-rhtwg
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter-4cw9r
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter-6tx5g
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols-gmdhs
  - namespace: openshift-scanning
    name: loggerservice-zprbq
  - namespace: openshift-security
    name: audit-exporter-nqfdk
  - namespace: openshift-validation-webhook
    name: validation-webhook-97b8t
  FileIntegrity:
  - namespace: openshift-file-integrity
    name: osd-fileintegrity
  MachineHealthCheck:
  - namespace: openshift-machine-api
    name: srep-infra-healthcheck
  - namespace: openshift-machine-api
    name: srep-metal-worker-healthcheck
  - namespace: openshift-machine-api
    name: srep-worker-healthcheck
  MachineSet:
  - namespace: openshift-machine-api
    name: sbasabat-mc-qhqkn-infra-us-east-1a
  - namespace: openshift-machine-api
    name: sbasabat-mc-qhqkn-worker-us-east-1a
  ContainerRuntimeConfig:
  - name: custom-crio
  KubeletConfig:
  - name: custom-kubelet
  MachineConfig:
  - name: 00-master-chrony
  - name: 00-worker-chrony
  SubjectPermission:
  - namespace: openshift-rbac-permissions
    name: backplane-cee
  - namespace: openshift-rbac-permissions
    name: backplane-csa
  - namespace: openshift-rbac-permissions
    name: backplane-cse
  - namespace: openshift-rbac-permissions
    name: backplane-csm
  - namespace: openshift-rbac-permissions
    name: backplane-mobb
  - namespace: openshift-rbac-permissions
    name: backplane-srep
  - namespace: openshift-rbac-permissions
    name: backplane-tam
  - namespace: openshift-rbac-permissions
    name: dedicated-admin-serviceaccounts
  - namespace: openshift-rbac-permissions
    name: dedicated-admin-serviceaccounts-core-ns
  - namespace: openshift-rbac-permissions
    name: dedicated-admins
  - namespace: openshift-rbac-permissions
    name: dedicated-admins-alert-routing-edit
  - namespace: openshift-rbac-permissions
    name: dedicated-admins-core-ns
  - namespace: openshift-rbac-permissions
    name: dedicated-admins-customer-monitoring
  - namespace: openshift-rbac-permissions
    name: osd-delete-backplane-serviceaccounts
  VeleroInstall:
  - namespace: openshift-velero
    name: cluster
  PrometheusRule:
  - namespace: openshift-monitoring
    name: rhmi-sre-cluster-admins
  - namespace: openshift-monitoring
    name: rhoam-sre-cluster-admins
  - namespace: openshift-monitoring
    name: sre-alertmanager-silences-active
  - namespace: openshift-monitoring
    name: sre-alerts-stuck-builds
  - namespace: openshift-monitoring
    name: sre-alerts-stuck-volumes
  - namespace: openshift-monitoring
    name: sre-cloud-ingress-operator-offline-alerts
  - namespace: openshift-monitoring
    name: sre-avo-pendingacceptance
  - namespace: openshift-monitoring
    name: sre-configure-alertmanager-operator-offline-alerts
  - namespace: openshift-monitoring
    name: sre-control-plane-resizing-alerts
  - namespace: openshift-monitoring
    name: sre-dns-alerts
  - namespace: openshift-monitoring
    name: sre-ebs-iops-burstbalance
  - namespace: openshift-monitoring
    name: sre-elasticsearch-jobs
  - namespace: openshift-monitoring
    name: sre-elasticsearch-managed-notification-alerts
  - namespace: openshift-monitoring
    name: sre-excessive-memory
  - namespace: openshift-monitoring
    name: sre-fr-alerts-low-disk-space
  - namespace: openshift-monitoring
    name: sre-haproxy-reload-fail
  - namespace: openshift-monitoring
    name: sre-internal-slo-recording-rules
  - namespace: openshift-monitoring
    name: sre-kubequotaexceeded
  - namespace: openshift-monitoring
    name: sre-leader-election-master-status-alerts
  - namespace: openshift-monitoring
    name: sre-managed-kube-apiserver-missing-on-node
  - namespace: openshift-monitoring
    name: sre-managed-kube-controller-manager-missing-on-node
  - namespace: openshift-monitoring
    name: sre-managed-kube-scheduler-missing-on-node
  - namespace: openshift-monitoring
    name: sre-managed-node-metadata-operator-alerts
  - namespace: openshift-monitoring
    name: sre-managed-notification-alerts
  - namespace: openshift-monitoring
    name: sre-managed-upgrade-operator-alerts
  - namespace: openshift-monitoring
    name: sre-managed-velero-operator-alerts
  - namespace: openshift-monitoring
    name: sre-node-unschedulable
  - namespace: openshift-monitoring
    name: sre-oauth-server
  - namespace: openshift-monitoring
    name: sre-pending-csr-alert
  - namespace: openshift-monitoring
    name: sre-proxy-managed-notification-alerts
  - namespace: openshift-monitoring
    name: sre-pruning
  - namespace: openshift-monitoring
    name: sre-pv
  - namespace: openshift-monitoring
    name: sre-router-health
  - namespace: openshift-monitoring
    name: sre-runaway-sdn-preventing-container-creation
  - namespace: openshift-monitoring
    name: sre-slo-recording-rules
  - namespace: openshift-monitoring
    name: sre-telemeter-client
  - namespace: openshift-monitoring
    name: sre-telemetry-managed-labels-recording-rules
  - namespace: openshift-monitoring
    name: sre-upgrade-send-managed-notification-alerts
  - namespace: openshift-monitoring
    name: sre-uptime-sla
  ServiceMonitor:
  - namespace: openshift-monitoring
    name: sre-dns-latency-exporter
  - namespace: openshift-monitoring
    name: sre-ebs-iops-reporter
  - namespace: openshift-monitoring
    name: sre-stuck-ebs-vols
  ClusterUrlMonitor:
  - namespace: openshift-route-monitor-operator
    name: api
  RouteMonitor:
  - namespace: openshift-route-monitor-operator
    name: console
  NetworkPolicy:
  - namespace: openshift-deployment-validation-operator
    name: allow-from-openshift-insights
  - namespace: openshift-deployment-validation-operator
    name: allow-from-openshift-olm
  ManagedNotification:
  - namespace: openshift-ocm-agent-operator
    name: sre-elasticsearch-managed-notifications
  - namespace: openshift-ocm-agent-operator
    name: sre-managed-notifications
  - namespace: openshift-ocm-agent-operator
    name: sre-proxy-managed-notifications
  - namespace: openshift-ocm-agent-operator
    name: sre-upgrade-managed-notifications
  OcmAgent:
  - namespace: openshift-ocm-agent-operator
    name: ocmagent
  - namespace: openshift-security
    name: audit-exporter
  Console:
  - name: cluster
  CatalogSource:
  - namespace: openshift-addon-operator
    name: addon-operator-catalog
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator-registry
  - namespace: openshift-compliance
    name: compliance-operator-registry
  - namespace: openshift-container-security
    name: container-security-operator-registry
  - namespace: openshift-custom-domains-operator
    name: custom-domains-operator-registry
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-catalog
  - namespace: openshift-managed-node-metadata-operator
    name: managed-node-metadata-operator-registry
  - namespace: openshift-file-integrity
    name: file-integrity-operator-registry
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator-catalog
  - namespace: openshift-monitoring
    name: configure-alertmanager-operator-registry
  - namespace: openshift-must-gather-operator
    name: must-gather-operator-registry
  - namespace: openshift-observability-operator
    name: observability-operator-catalog
  - namespace: openshift-ocm-agent-operator
    name: ocm-agent-operator-registry
  - namespace: openshift-osd-metrics
    name: osd-metrics-exporter-registry
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator-registry
  - namespace: openshift-route-monitor-operator
    name: route-monitor-operator-registry
  - namespace: openshift-splunk-forwarder-operator
    name: splunk-forwarder-operator-catalog
  - namespace: openshift-velero
    name: managed-velero-operator-registry
  OperatorGroup:
  - namespace: openshift-addon-operator
    name: addon-operator-og
  - namespace: openshift-aqua
    name: openshift-aqua
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-codeready-workspaces
    name: openshift-codeready-workspaces
  - namespace: openshift-compliance
    name: compliance-operator
  - namespace: openshift-container-security
    name: container-security-operator
  - namespace: openshift-custom-domains-operator
    name: custom-domains-operator
  - namespace: openshift-customer-monitoring
    name: openshift-customer-monitoring
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator-og
  - namespace: openshift-managed-node-metadata-operator
    name: managed-node-metadata-operator
  - namespace: openshift-file-integrity
    name: file-integrity-operator
  - namespace: openshift-logging
    name: openshift-logging
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator-og
  - namespace: openshift-must-gather-operator
    name: must-gather-operator
  - namespace: openshift-observability-operator
    name: observability-operator-og
  - namespace: openshift-ocm-agent-operator
    name: ocm-agent-operator-og
  - namespace: openshift-osd-metrics
    name: osd-metrics-exporter
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator
  - namespace: openshift-route-monitor-operator
    name: route-monitor-operator
  - namespace: openshift-splunk-forwarder-operator
    name: splunk-forwarder-operator-og
  - namespace: openshift-velero
    name: managed-velero-operator
  Subscription:
  - namespace: openshift-addon-operator
    name: addon-operator
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-compliance
    name: compliance-operator-sub
  - namespace: openshift-container-security
    name: container-security-operator-sub
  - namespace: openshift-custom-domains-operator
    name: custom-domains-operator
  - namespace: openshift-deployment-validation-operator
    name: deployment-validation-operator
  - namespace: openshift-managed-node-metadata-operator
    name: managed-node-metadata-operator
  - namespace: openshift-file-integrity
    name: file-integrity-operator-sub
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator
  - namespace: openshift-monitoring
    name: configure-alertmanager-operator
  - namespace: openshift-must-gather-operator
    name: must-gather-operator
  - namespace: openshift-observability-operator
    name: observability-operator
  - namespace: openshift-ocm-agent-operator
    name: ocm-agent-operator
  - namespace: openshift-osd-metrics
    name: osd-metrics-exporter
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator
  - namespace: openshift-route-monitor-operator
    name: route-monitor-operator
  - namespace: openshift-splunk-forwarder-operator
    name: openshift-splunk-forwarder-operator
  - namespace: openshift-velero
    name: managed-velero-operator
  PackageManifest:
  - namespace: openshift-splunk-forwarder-operator
    name: splunk-forwarder-operator
  - namespace: openshift-addon-operator
    name: addon-operator
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator
  - namespace: openshift-cloud-ingress-operator
    name: cloud-ingress-operator
  - namespace: openshift-managed-node-metadata-operator
    name: managed-node-metadata-operator
  - namespace: openshift-velero
    name: managed-velero-operator
  - namespace: openshift-deployment-validation-operator
    name: managed-upgrade-operator
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator
  - namespace: openshift-container-security
    name: container-security-operator
  - namespace: openshift-route-monitor-operator
    name: route-monitor-operator
  - namespace: openshift-file-integrity
    name: file-integrity-operator
  - namespace: openshift-custom-domains-operator
    name: managed-node-metadata-operator
  - namespace: openshift-route-monitor-operator
    name: custom-domains-operator
  - namespace: openshift-managed-upgrade-operator
    name: managed-upgrade-operator
  - namespace: openshift-ocm-agent-operator
    name: ocm-agent-operator
  - namespace: openshift-observability-operator
    name: observability-operator
  - namespace: openshift-monitoring
    name: configure-alertmanager-operator
  - namespace: openshift-must-gather-operator
    name: deployment-validation-operator
  - namespace: openshift-osd-metrics
    name: osd-metrics-exporter
  - namespace: openshift-compliance
    name: compliance-operator
  - namespace: openshift-rbac-permissions
    name: rbac-permissions-operator
  Status:
  - {}
  Project:
  - name: dedicated-admin
  - name: openshift-addon-operator
  - name: openshift-aqua
  - name: openshift-backplane
  - name: openshift-backplane-cee
  - name: openshift-backplane-csa
  - name: openshift-backplane-cse
  - name: openshift-backplane-csm
  - name: openshift-backplane-managed-scripts
  - name: openshift-backplane-mobb
  - name: openshift-backplane-srep
  - name: openshift-backplane-srep-ro
  - name: openshift-backplane-tam
  - name: openshift-cloud-ingress-operator
  - name: openshift-codeready-workspaces
  - name: openshift-compliance
  - name: openshift-container-security
  - name: openshift-custom-domains-operator
  - name: openshift-customer-monitoring
  - name: openshift-deployment-validation-operator
  - name: openshift-managed-node-metadata-operator
  - name: openshift-file-integrity
  - name: openshift-logging
  - name: openshift-managed-upgrade-operator
  - name: openshift-must-gather-operator
  - name: openshift-observability-operator
  - name: openshift-ocm-agent-operator
  - name: openshift-operators-redhat
  - name: openshift-osd-metrics
  - name: openshift-rbac-permissions
  - name: openshift-route-monitor-operator
  - name: openshift-scanning
  - name: openshift-security
  - name: openshift-splunk-forwarder-operator
  - name: openshift-sre-pruning
  - name: openshift-suricata
  - name: openshift-validation-webhook
  - name: openshift-velero
  ClusterResourceQuota:
  - name: loadbalancer-quota
  - name: persistent-volume-quota
  SecurityContextConstraints:
  - name: osd-scanning-scc
  - name: osd-suricata-scc
  - name: pcap-dedicated-admins
  - name: splunkforwarder
  SplunkForwarder:
  - namespace: openshift-security
    name: splunkforwarder
  Group:
  - name: cluster-admins
  - name: dedicated-admins
  User:
  - name: backplane-cluster-admin
  Backup:
  - namespace: openshift-velero
    name: daily-full-backup-20221123112305
  - namespace: openshift-velero
    name: daily-full-backup-20221125042537
  - namespace: openshift-velero
    name: daily-full-backup-20221126010038
  - namespace: openshift-velero
    name: daily-full-backup-20221127010039
  - namespace: openshift-velero
    name: daily-full-backup-20221128010040
  - namespace: openshift-velero
    name: daily-full-backup-20221129050847
  - namespace: openshift-velero
    name: hourly-object-backup-20221128051740
  - namespace: openshift-velero
    name: hourly-object-backup-20221128061740
  - namespace: openshift-velero
    name: hourly-object-backup-20221128071740
  - namespace: openshift-velero
    name: hourly-object-backup-20221128081740
  - namespace: openshift-velero
    name: hourly-object-backup-20221128091740
  - namespace: openshift-velero
    name: hourly-object-backup-20221129050852
  - namespace: openshift-velero
    name: hourly-object-backup-20221129051747
  - namespace: openshift-velero
    name: weekly-full-backup-20221116184315
  - namespace: openshift-velero
    name: weekly-full-backup-20221121033854
  - namespace: openshift-velero
    name: weekly-full-backup-20221128020040
  Schedule:
  - namespace: openshift-velero
    name: daily-full-backup
  - namespace: openshift-velero
    name: hourly-object-backup
  - namespace: openshift-velero
    name: weekly-full-backup
```
```
</details>

## {{ product_title }} core namespaces {id="sd-core-namespaces_{{ context }}"}

{{ product_title }} core namespaces are installed by default during cluster installation.

**List of core namespaces**

(Note that the following may not be visible in your ROSA cluster)

<details>
<summary>Details</summary>

```yaml
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ocp-namespaces
  namespace: openshift-monitoring
data:
  managed_namespaces.yaml: |
    Resources:
      Namespace:
      - name: kube-system
      - name: openshift-apiserver
      - name: openshift-apiserver-operator
      - name: openshift-authentication
      - name: openshift-authentication-operator
      - name: openshift-cloud-controller-manager
      - name: openshift-cloud-controller-manager-operator
      - name: openshift-cloud-credential-operator
      - name: openshift-cloud-network-config-controller
      - name: openshift-cluster-api
      - name: openshift-cluster-csi-drivers
      - name: openshift-cluster-machine-approver
      - name: openshift-cluster-node-tuning-operator
      - name: openshift-cluster-samples-operator
      - name: openshift-cluster-storage-operator
      - name: openshift-config
      - name: openshift-config-managed
      - name: openshift-config-operator
      - name: openshift-console
      - name: openshift-console-operator
      - name: openshift-console-user-settings
      - name: openshift-controller-manager
      - name: openshift-controller-manager-operator
      - name: openshift-dns
      - name: openshift-dns-operator
      - name: openshift-etcd
      - name: openshift-etcd-operator
      - name: openshift-host-network
      - name: openshift-image-registry
      - name: openshift-ingress
      - name: openshift-ingress-canary
      - name: openshift-ingress-operator
      - name: openshift-insights
      - name: openshift-kni-infra
      - name: openshift-kube-apiserver
      - name: openshift-kube-apiserver-operator
      - name: openshift-kube-controller-manager
      - name: openshift-kube-controller-manager-operator
      - name: openshift-kube-scheduler
      - name: openshift-kube-scheduler-operator
      - name: openshift-kube-storage-version-migrator
      - name: openshift-kube-storage-version-migrator-operator
      - name: openshift-machine-api
      - name: openshift-machine-config-operator
      - name: openshift-marketplace
      - name: openshift-monitoring
      - name: openshift-multus
      - name: openshift-network-diagnostics
      - name: openshift-network-operator
      - name: openshift-nutanix-infra
      - name: openshift-oauth-apiserver
      - name: openshift-openstack-infra
      - name: openshift-operator-lifecycle-manager
      - name: openshift-operators
      - name: openshift-ovirt-infra
      - name: openshift-sdn      
      - name: openshift-ovn-kubernetes
      - name: openshift-platform-operators
      - name: openshift-route-controller-manager
      - name: openshift-service-ca
      - name: openshift-service-ca-operator
      - name: openshift-user-workload-monitoring
      - name: openshift-vsphere-infra

```
```
</details>

## {{ product_title }} add-on namespaces {id="sd-add-on-managed-namespaces_{{ context }}"}

{{ product_title }} add-ons are services available for installation after cluster installation. These additional services include {{ openshift_dev_spaces_productname }}, Red&#160;Hat OpenShift API Management, and Cluster Logging Operator. Any changes to resources within the following namespaces can be overridden by the add-on during upgrades, which can lead to unsupported configurations for the add-on functionality.

<details>
<summary>List of add-on managed namespaces</summary>

```yaml
```yaml
addon-namespaces:
  ocs-converged-dev: openshift-storage
  managed-api-service-internal: redhat-rhoami-operator
  codeready-workspaces-operator: codeready-workspaces-operator
  managed-odh: redhat-ods-operator
  codeready-workspaces-operator-qe: codeready-workspaces-operator-qe
  integreatly-operator: redhat-rhmi-operator
  nvidia-gpu-addon: redhat-nvidia-gpu-addon
  integreatly-operator-internal: redhat-rhmi-operator
  rhoams: redhat-rhoam-operator
  ocs-converged: openshift-storage
  addon-operator: redhat-addon-operator
  prow-operator: prow
  cluster-logging-operator: openshift-logging
  advanced-cluster-management: redhat-open-cluster-management
  cert-manager-operator: redhat-cert-manager-operator
  dba-operator: addon-dba-operator
  reference-addon: redhat-reference-addon
  ocm-addon-test-operator: redhat-ocm-addon-test-operator
```
```
</details>

## {{ product_title }} validating webhooks {id="sd-validating-webhooks_{{ context }}"}

{{ product_title }} validating webhooks are a set of dynamic admission controls maintained by the OpenShift SRE team. These HTTP callbacks, also known as webhooks, are called for various types of requests to ensure cluster stability. The following list describes the various webhooks with rules containing the registered operations and resources that are controlled. Any attempt to circumvent these validating webhooks could affect the stability and supportability of the cluster.

<details>
<summary>List of validating webhooks</summary>

```json
```json
[
  {
    "webhookName": "clusterlogging-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          "logging.openshift.io"
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "clusterloggings"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customers may set log retention outside the allowed range of 0-7 days"
  },
  {
    "webhookName": "clusterrolebindings-validation",
    "rules": [
      {
        "operations": [
          "DELETE"
        ],
        "apiGroups": [
          "rbac.authorization.k8s.io"
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "clusterrolebindings"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not delete the cluster role bindings under the managed namespaces: (^openshift-.*|kube-system)"
  },
  {
    "webhookName": "clusterroles-validation",
    "rules": [
      {
        "operations": [
          "DELETE"
        ],
        "apiGroups": [
          "rbac.authorization.k8s.io"
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "clusterroles"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not delete protected ClusterRoles including cluster-admin, view, edit, admin, specific system roles (system:admin, system:node, system:node-proxier, system:kube-scheduler, system:kube-controller-manager), and backplane-* roles"
  },
  {
    "webhookName": "customresourcedefinitions-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "apiextensions.k8s.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "customresourcedefinitions"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not change CustomResourceDefinitions managed by Red Hat."
  },
  {
    "webhookName": "hiveownership-validation",
    "rules": [
      {
        "operations": [
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "quota.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "clusterresourcequotas"
        ],
        "scope": "Cluster"
      }
    ],
    "webhookObjectSelector": {
      "matchLabels": {
        "hive.openshift.io/managed": "true"
      }
    },
    "documentString": "Managed OpenShift customers may not edit certain managed resources. A managed resource has a \"hive.openshift.io/managed\": \"true\" label."
  },
  {
    "webhookName": "imagecontentpolicies-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          "config.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "imagedigestmirrorsets",
          "imagetagmirrorsets"
        ],
        "scope": "Cluster"
      },
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          "operator.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "imagecontentsourcepolicies"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift customers may not create ImageContentSourcePolicy, ImageDigestMirrorSet, or ImageTagMirrorSet resources that configure mirrors that would conflict with system registries (e.g. quay.io, registry.redhat.io, registry.access.redhat.com, etc). For more details, see https://docs.openshift.com/"
  },
  {
    "webhookName": "ingress-config-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "config.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "ingresses"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift customers may not modify ingress config resources because it can can degrade cluster operators and can interfere with OpenShift SRE monitoring."
  },
  {
    "webhookName": "ingresscontroller-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          "operator.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "ingresscontroller",
          "ingresscontrollers"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customer may create IngressControllers without necessary taints. This can cause those workloads to be provisioned on master nodes."
  },
  {
    "webhookName": "namespace-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "namespaces"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not modify namespaces specified in the [openshift-monitoring/managed-namespaces openshift-monitoring/ocp-namespaces] ConfigMaps because customer workloads should be placed in customer-created namespaces. Customers may not create namespaces identified by this regular expression (^com$|^io$|^in$) because it could interfere with critical DNS resolution. Additionally, customers may not set or change the values of these Namespace labels [managed.openshift.io/storage-pv-quota-exempt managed.openshift.io/service-lb-quota-exempt]."
  },
  {
    "webhookName": "network-operator-validation",
    "rules": [
      {
        "operations": [
          "UPDATE"
        ],
        "apiGroups": [
          "operator.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "network",
          "networks"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift customers may not modify critical fields in the network.operator CRD (such as spec.migration.networkType) because it can disrupt Cluster Network Operator operations and CNI migrations. Even cluster-admin users are blocked from modifying these critical fields."
  },
  {
    "webhookName": "networkpolicies-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "networking.k8s.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "networkpolicies"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customers may not create NetworkPolicies in namespaces managed by Red Hat."
  },
  {
    "webhookName": "node-validation-osd",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "nodes",
          "nodes/*"
        ],
        "scope": "*"
      }
    ],
    "documentString": "Managed OpenShift customers may not alter Node objects."
  },
  {
    "webhookName": "pod-validation",
    "rules": [
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "v1"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "pods"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customers may use tolerations on Pods that could cause those Pods to be scheduled on infra or master nodes."
  },
  {
    "webhookName": "podimagespec-mutation",
    "rules": [
      {
        "operations": [
          "CREATE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "pods"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "OpenShift debugging tools on Managed OpenShift clusters must be available even if internal image registry is removed."
  },
  {
    "webhookName": "prometheusrule-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "monitoring.coreos.com"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "prometheusrules"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customers may not create PrometheusRule in namespaces managed by Red Hat."
  },
  {
    "webhookName": "regular-user-validation",
    "rules": [
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "cloudcredential.openshift.io",
          "machine.openshift.io",
          "admissionregistration.k8s.io",
          "addons.managed.openshift.io",
          "cloudingress.managed.openshift.io",
          "managed.openshift.io",
          "ocmagent.managed.openshift.io",
          "splunkforwarder.managed.openshift.io",
          "upgrade.managed.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "*/*"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "autoscaling.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "clusterautoscalers",
          "machineautoscalers"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "config.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "clusterversions",
          "clusterversions/status",
          "schedulers",
          "apiservers",
          "proxies"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "CREATE",
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "configmaps"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "machineconfiguration.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "machineconfigs",
          "machineconfigpools"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "operator.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "kubeapiservers",
          "openshiftapiservers"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "managed.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "subjectpermissions",
          "subjectpermissions/*"
        ],
        "scope": "*"
      },
      {
        "operations": [
          "*"
        ],
        "apiGroups": [
          "network.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "netnamespaces",
          "netnamespaces/*"
        ],
        "scope": "*"
      }
    ],
    "documentString": "Managed OpenShift customers may not manage any objects in the following APIGroups [splunkforwarder.managed.openshift.io autoscaling.openshift.io ocmagent.managed.openshift.io upgrade.managed.openshift.io config.openshift.io machineconfiguration.openshift.io operator.openshift.io network.openshift.io cloudcredential.openshift.io machine.openshift.io admissionregistration.k8s.io addons.managed.openshift.io cloudingress.managed.openshift.io managed.openshift.io], nor may Managed OpenShift customers alter the APIServer, KubeAPIServer, OpenShiftAPIServer, ClusterVersion, Proxy or SubjectPermission objects."
  },
  {
    "webhookName": "scc-validation",
    "rules": [
      {
        "operations": [
          "UPDATE",
          "DELETE"
        ],
        "apiGroups": [
          "security.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "securitycontextconstraints"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not modify the following default SCCs: [anyuid hostaccess hostmount-anyuid hostnetwork hostnetwork-v2 node-exporter nonroot nonroot-v2 privileged restricted restricted-v2]"
  },
  {
    "webhookName": "sdn-migration-validation",
    "rules": [
      {
        "operations": [
          "UPDATE"
        ],
        "apiGroups": [
          "config.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "networks"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift customers may not modify the network config type because it can can degrade cluster operators and can interfere with OpenShift SRE monitoring."
  },
  {
    "webhookName": "service-mutation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "services"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "LoadBalancer-type services on Managed OpenShift clusters must contain an additional annotation for managed policy compliance."
  },
  {
    "webhookName": "serviceaccount-validation",
    "rules": [
      {
        "operations": [
          "DELETE"
        ],
        "apiGroups": [
          ""
        ],
        "apiVersions": [
          "v1"
        ],
        "resources": [
          "serviceaccounts"
        ],
        "scope": "Namespaced"
      }
    ],
    "documentString": "Managed OpenShift Customers may not delete the service accounts under the managed namespaces。"
  },
  {
    "webhookName": "techpreviewnoupgrade-validation",
    "rules": [
      {
        "operations": [
          "CREATE",
          "UPDATE"
        ],
        "apiGroups": [
          "config.openshift.io"
        ],
        "apiVersions": [
          "*"
        ],
        "resources": [
          "featuregates"
        ],
        "scope": "Cluster"
      }
    ],
    "documentString": "Managed OpenShift Customers may not use TechPreviewNoUpgrade FeatureGate that could prevent any future ability to do a y-stream upgrade to their clusters."
  }
]
```
```
</details>
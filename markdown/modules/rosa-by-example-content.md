{%- set _mod_docs_content_type = "REFERENCE" %}
# ROSA CLI commands {id="rosa-cli-commands_{{ context }}"}

{{ rosa_cli_first }} offers the following options for interacting with your cluster. {._abstract}

## rosa create account-roles {id="_rosa_create_account-roles"}
Create account-wide Identity and Access Management (IAM) roles before creating your cluster.

```bash title="Example usage"
# Create default account roles for ROSA clusters using STS
  rosa create account-roles

# Create account roles with a specific permissions boundary
  rosa create account-roles --permissions-boundary arn:aws:iam::123456789012:policy/perm-boundary
```

## rosa create admin {id="_rosa_create_admin"}
Creates an admin user to login to the cluster

```bash title="Example usage"
# Create an admin user to login to the cluster
  rosa create admin -c mycluster -p MasterKey123
```

## rosa create autoscaler {id="_rosa_create_autoscaler"}
Create an autoscaler for a cluster

```bash title="Example usage"
# Interactively create an autoscaler to a cluster named "mycluster"
  rosa create autoscaler --cluster=mycluster --interactive

# Create a cluster-autoscaler where it should skip nodes with local storage
  rosa create autoscaler --cluster=mycluster --skip-nodes-with-local-storage

# Create a cluster-autoscaler with log verbosity of '3'
  rosa create autoscaler --cluster=mycluster --log-verbosity 3

# Create a cluster-autoscaler with total CPU constraints
  rosa create autoscaler --cluster=mycluster --min-cores 10 --max-cores 100
```

## rosa create break-glass-credential {id="_rosa_create_break-glass-credential"}
Create a break glass credential for a cluster.

```bash title="Example usage"
# Interactively create a break glass credential to a cluster named "mycluster"
  rosa create break-glass-credential --cluster=mycluster --interactive
```

## rosa create cluster {id="_rosa_create_cluster"}
Create cluster

```bash title="Example usage"
# Create a cluster named "mycluster"
  rosa create cluster --cluster-name=mycluster

# Create a cluster in the us-east-2 region
  rosa create cluster --cluster-name=mycluster --region=us-east-2
```

## rosa create decision {id="_rosa_create_decision"}
Create a decision for an Access Request

```bash title="Example usage"
# Create a decision for an Access Request to approve it
  rosa create decision --access-request <access_request_id> --decision Approved
```

## rosa create dns-domain {id="_rosa_create_dns-domain"}
Create Domain Name System (DNS) domain.

```bash title="Example usage"
# Create DNS Domain
  rosa create dns-domain
```

## rosa create external-auth-provider {id="_rosa_create_external-auth-provider"}
Create an external authentication provider for a cluster.

```bash title="Example usage"
# Interactively create an external authentication provider to a cluster named "mycluster"
  rosa create external-auth-provider --cluster=mycluster --interactive
```

## rosa create iamserviceaccount {id="_rosa_create_iamserviceaccount"}
Create IAM role for Kubernetes service account

```bash title="Example usage"
# Create an IAM role for a service account
  rosa create iamserviceaccount --cluster my-cluster --name my-app --namespace default
```

## rosa create idp {id="_rosa_create_idp"}
Add an identity provider (IDP) for a cluster

```bash title="Example usage"
# Add a GitHub identity provider to a cluster named "mycluster"
  rosa create idp --type=github --cluster=mycluster

# Add an identity provider following interactive prompts
  rosa create idp --cluster=mycluster --interactive
```

## rosa create image-mirror {id="_rosa_create_image-mirror"}
Create image mirror for a cluster

```bash title="Example usage"
# Create an image mirror for cluster "mycluster"
  rosa create image-mirror --cluster=mycluster \
    --source=registry.example.com/team \
    --mirrors=mirror.corp.com/team,backup.corp.com/team

# Create with a specific type (digest is default and only supported type)
  rosa create image-mirror --cluster=mycluster \
    --type=digest --source=docker.io/library \
    --mirrors=internal-registry.company.com/dockerhub
```

## rosa create kubeletconfig {id="_rosa_create_kubeletconfig"}
Create a custom kubeletconfig for a cluster

```bash title="Example usage"
# Create a custom kubeletconfig with a pod-pids-limit of 5000
  rosa create kubeletconfig --cluster=mycluster --pod-pids-limit=5000
```

## rosa create log-forwarder {id="_rosa_create_log-forwarder"}
Create a log forwarder for a Hosted Control Plane cluster

```bash title="Example usage"
# Create a log forwarder using a config file
  rosa create log-forwarder -c mycluster-hcp --log-fwd-config=s3.yml
  
# Create a log forwarder interactively
  rosa create log-forwarder -c mycluster-hcp --interactive
```

## rosa create machinepool {id="_rosa_create_machinepool"}
Add machine pool to cluster

```bash title="Example usage"
# Interactively add a machine pool to a cluster named "mycluster"
  rosa create machinepool --cluster=mycluster --interactive

# Add a machine pool mp-1 with 3 replicas of m7i.xlarge to a cluster
  rosa create machinepool --cluster=mycluster --name=mp-1 --replicas=3 --instance-type=m7i.xlarge

# Add a machine pool mp-1 with autoscaling enabled and 3 to 6 replicas of m7i.xlarge to a cluster
  rosa create machinepool --cluster=mycluster --name=mp-1 --enable-autoscaling \
  --min-replicas=3 --max-replicas=6 --instance-type=m7i.xlarge

# Add a machine pool with labels to a cluster
  rosa create machinepool -c mycluster --name=mp-1 --replicas=2 --instance-type=r5.2xlarge --labels=foo=bar,bar=baz,

# Add a machine pool with spot instances to a cluster
  rosa create machinepool -c mycluster --name=mp-1 --replicas=2 --instance-type=r5.2xlarge --use-spot-instances \
  --spot-max-price=0.5

# Add a machine pool to a cluster and set the node drain grace period
  rosa create machinepool -c mycluster --name=mp-1 --node-drain-grace-period="90 minutes"
```

## rosa create network {id="_rosa_create_network"}
Network AWS cloudformation stack

```bash title="Example usage"
# Create a AWS cloudformation stack
  rosa create network <template-name> --param Param1=Value1 --param Param2=Value2 

# ROSA quick start HCP VPC example with one availability zone
  rosa create network rosa-quickstart-default-vpc --param Region=us-west-2 --param Name=quickstart-stack --param AvailabilityZoneCount=1 --param VpcCidr=10.0.0.0/16

# ROSA quick start HCP VPC example with two explicit availability zones
  rosa create network rosa-quickstart-default-vpc --param Region=us-west-2 --param Name=quickstart-stack --param AZ1=us-west-2b --param AZ2=us-west-2d --param VpcCidr=10.0.0.0/16

# To delete the AWS cloudformation stack
  aws cloudformation delete-stack --stack-name <name> --region <region>

# TEMPLATE_NAME:
Specifies the name of the template to use. This should match the name of a directory 
under the path specified by '--template-dir' or the 'OCM_TEMPLATE_DIR' environment variable.
The directory should contain a YAML file defining the custom template structure.

If no TEMPLATE_NAME is provided, or if no matching directory is found, the default 
built-in template 'rosa-quickstart-default-vpc' will be used.
```

## rosa create ocm-role {id="_rosa_create_ocm-role"}
Create role used by {{ hybrid_console }}

```bash title="Example usage"
# Create default ocm-role for ROSA clusters using STS
  rosa create ocm-role

# Create ocm-role with a specific permissions boundary
  rosa create ocm-role --permissions-boundary arn:aws:iam::123456789012:policy/perm-boundary
```

## rosa create oidc-config {id="_rosa_create_oidc-config"}
Create OpenID Connect (OIDC) config compliant with OIDC protocol.

```bash title="Example usage"
# Create OIDC config
  rosa create oidc-config
```

## rosa create oidc-provider {id="_rosa_create_oidc-provider"}
Create OpenID Connect (OIDC) provider for an AWS Security Token Service (STS) cluster.

```bash title="Example usage"
# Create OIDC provider for cluster named "mycluster"
  rosa create oidc-provider --cluster=mycluster
```

## rosa create operator-roles {id="_rosa_create_operator-roles"}
Create Operator Identity and Access Management (IAM) roles for a cluster.

```bash title="Example usage"
# Create default operator roles for cluster named "mycluster"
  rosa create operator-roles --cluster=mycluster

# Create operator roles with a specific permissions boundary
  rosa create operator-roles -c mycluster --permissions-boundary arn:aws:iam::123456789012:policy/perm-boundary
```

## rosa create tuning-configs {id="_rosa_create_tuning-configs"}
Add tuning config

```bash title="Example usage"
# Add a tuning config with name "tuned1" and spec from a file "file1" to a cluster named "mycluster"
  rosa create tuning-config --name=tuned1 --spec-path=file1 --cluster=mycluster"
```

## rosa create user-role {id="_rosa_create_user-role"}
Create user role to verify account association

```bash title="Example usage"
# Create user roles
  rosa create user-role

# Create user role with a specific permissions boundary
  rosa create user-role --permissions-boundary arn:aws:iam::123456789012:policy/perm-boundary
```

## rosa delete account-roles {id="_rosa_delete_account-roles"}
Delete account roles

```bash title="Example usage"
# Delete Account roles
  rosa delete account-roles -p prefix
```

## rosa delete admin {id="_rosa_delete_admin"}
Deletes the admin user

```bash title="Example usage"
# Delete the admin user
  rosa delete admin --cluster=mycluster
```

## rosa delete autoscaler {id="_rosa_delete_autoscaler"}
Delete autoscaler for cluster

```bash title="Example usage"
# Delete the autoscaler config for cluster named "mycluster"
  rosa delete autoscaler --cluster=mycluster
```

## rosa delete cluster {id="_rosa_delete_cluster"}
Delete cluster

```bash title="Example usage"
# Delete a cluster named "mycluster"
  rosa delete cluster --cluster=mycluster
```

## rosa delete dns-domain {id="_rosa_delete_dns-domain"}
Delete DNS domain

```bash title="Example usage"
# Delete a DNS domain with ID github-1
  rosa delete dns-domain github-1
```

## rosa delete external-auth-provider {id="_rosa_delete_external-auth-provider"}
Delete external authentication provider

```bash title="Example usage"
# Delete an external authentication provider named exauth-1
  rosa delete external-auth-provider exauth-1  --cluster=mycluster
```

## rosa delete iamserviceaccount {id="_rosa_delete_iamserviceaccount"}
Delete IAM role for Kubernetes service account

```bash title="Example usage"
# Delete IAM role for service account
  rosa delete iamserviceaccount --cluster my-cluster \
    --name my-app \
    --namespace default
```

## rosa delete idp {id="_rosa_delete_idp"}
Delete cluster identity providers (IDPs)

```bash title="Example usage"
# Delete an identity provider named github-1
  rosa delete idp github-1 --cluster=mycluster
```

## rosa delete image-mirror {id="_rosa_delete_image-mirror"}
Delete image mirror from a cluster

```bash title="Example usage"
# Delete image mirror with ID "abc123" from cluster "mycluster"
  rosa delete image-mirror --cluster=mycluster abc123

# Delete without confirmation prompt
  rosa delete image-mirror --cluster=mycluster abc123 --yes

# Alternative: using the --id flag
  rosa delete image-mirror --cluster=mycluster --id=abc123
```

## rosa delete ingress {id="_rosa_delete_ingress"}
Delete cluster ingress

```bash title="Example usage"
# Delete ingress with ID a1b2 from a cluster named 'mycluster'
  rosa delete ingress --cluster=mycluster a1b2

# Delete secondary ingress using the sub-domain name
  rosa delete ingress --cluster=mycluster apps2
```

## rosa delete kubeletconfig {id="_rosa_delete_kubeletconfig"}
Delete a kubeletconfig from a cluster

```bash title="Example usage"
# Delete the KubeletConfig for ROSA Classic cluster 'foo'
  rosa delete kubeletconfig --cluster foo

# Delete the KubeletConfig named 'bar' from cluster 'foo'
  rosa delete kubeletconfig --cluster foo --name bar
```

## rosa delete log-forwarder {id="_rosa_delete_log-forwarder"}
Delete log forwarder

```bash title="Example usage"
# Delete log forwarder with ID 'example-id' from a cluster named 'mycluster-hcp'
  rosa delete log-forwarder --cluster=mycluster-hcp example-id
```

## rosa delete machinepool {id="_rosa_delete_machinepool"}
Delete machine pool

```bash title="Example usage"
# Delete machine pool with ID mp-1 from a cluster named 'mycluster'
  rosa delete machinepool --cluster=mycluster mp-1
```

## rosa delete ocm-role {id="_rosa_delete_ocm-role"}
Delete the {{ hybrid_console }} role

```bash title="Example usage"
# Delete OCM role
rosa delete ocm-role --role-arn arn:aws:iam::123456789012:role/xxx-OCM-Role-1223456778
```

## rosa delete oidc-config {id="_rosa_delete_oidc-config"}
Delete an OpenID Connect (OIDC) configuration

```bash title="Example usage"
# Delete OIDC config based on registered OIDC Config ID that has been supplied
  rosa delete oidc-config --oidc-config-id <oidc_config_id>
```

## rosa delete oidc-provider {id="_rosa_delete_oidc-provider"}
Delete OpenID Connect (OIDC) provider

```bash title="Example usage"
# Delete OIDC provider for cluster named "mycluster"
  rosa delete oidc-provider --cluster=mycluster
```

## rosa delete operator-roles {id="_rosa_delete_operator-roles"}
Delete Operator Roles

```bash title="Example usage"
# Delete Operator roles for cluster named "mycluster"
  rosa delete operator-roles --cluster=mycluster
```

## rosa delete tuning-configs {id="_rosa_delete_tuning-configs"}
Delete tuning config

```bash title="Example usage"
# Delete tuning config with name tuned1 from a cluster named 'mycluster'
  rosa delete tuning-config --cluster=mycluster tuned1
```

## rosa delete user-role {id="_rosa_delete_user-role"}
Delete user role

```bash title="Example usage"
# Delete user role
rosa delete user-role --role-arn {prefix}-User-{username}-Role
```

## rosa describe access-request {id="_rosa_describe_access-request"}
Show details of an Access Request

```bash title="Example usage"
# Describe an Access Request wit id <access_request_id>
  rosa describe access-request --id <access_request_id>
```

## rosa describe addon {id="_rosa_describe_addon"}
Show details of an add-on

```bash title="Example usage"
# Describe an add-on named "codeready-workspaces"
  rosa describe addon codeready-workspaces
```

## rosa describe addon-installation {id="_rosa_describe_addon-installation"}
Show details of an add-on installation

```bash title="Example usage"
# Describe the 'bar' add-on installation on cluster 'foo'
  rosa describe addon-installation --cluster foo --addon bar
```

## rosa describe admin {id="_rosa_describe_admin"}
Show details of the cluster-admin user

```bash title="Example usage"
# Describe cluster-admin user of a cluster named mycluster
  rosa describe admin -c mycluster
```

## rosa describe autoscaler {id="_rosa_describe_autoscaler"}
Show details of the autoscaler for a cluster

```bash title="Example usage"
# Describe the autoscaler for cluster 'foo'
  rosa describe autoscaler --cluster foo
```

## rosa describe break-glass-credential {id="_rosa_describe_break-glass-credential"}
Show details of a break glass credential on a cluster

```bash title="Example usage"
# Show details of a break glass credential with ID "12345" on a cluster named "mycluster"
  rosa describe break-glass-credential 12345 --cluster=mycluster
```

## rosa describe cluster {id="_rosa_describe_cluster"}
Show details of a cluster

```bash title="Example usage"
# Describe a cluster named "mycluster"
  rosa describe cluster --cluster=mycluster
```

## rosa describe external-auth-provider {id="_rosa_describe_external-auth-provider"}
Show details of an external authentication provider on a cluster

```bash title="Example usage"
# Show details of an external authentication provider named "exauth" on a cluster named "mycluster"
  rosa describe external-auth-provider exauth --cluster=mycluster
```

## rosa describe iamserviceaccount {id="_rosa_describe_iamserviceaccount"}
Describe IAM role for Kubernetes service account

```bash title="Example usage"
# Describe IAM role for service account
  rosa describe iamserviceaccount --cluster my-cluster \
    --name my-app \
    --namespace default
```

## rosa describe ingress {id="_rosa_describe_ingress"}
Show details of the specified ingress within cluster

```bash title="Example usage"
# Show details of the specified ingress within cluster
  rosa describe ingress <ingress_id> -c mycluster
```

## rosa describe kubeletconfig {id="_rosa_describe_kubeletconfig"}
Show details of a kubeletconfig for a cluster

```bash title="Example usage"
# Describe the custom kubeletconfig for ROSA Classic cluster 'foo'
  rosa describe kubeletconfig --cluster foo

# Describe the custom kubeletconfig named 'bar' for cluster 'foo'
  rosa describe kubeletconfig --cluster foo --name bar
```

## rosa describe log-forwarder {id="_rosa_describe_log-forwarder"}
Show details of a specific log forwarder used by a cluster

```bash title="Example usage"
# Show details of a specific log forwarder used by a cluster
  rosa describe log-forwarder <log_fwd_id> -c mycluster-hcp
```

## rosa describe machinepool {id="_rosa_describe_machinepool"}
Show details of a machine pool on a cluster

```bash title="Example usage"
# Show details of a machine pool named "mymachinepool" on a cluster named "mycluster"
  rosa describe machinepool --cluster=mycluster --machinepool=mymachinepool
```

## rosa describe tuning-configs {id="_rosa_describe_tuning-configs"}
Show details of tuning config

```bash title="Example usage"
# Describe the 'tuned1' tuned config on cluster 'foo'
  rosa describe tuning-config --cluster foo tuned1
```

## rosa describe upgrade {id="_rosa_describe_upgrade"}
Show details of an upgrade

```bash title="Example usage"
# Describe an upgrade-policy"
  rosa describe upgrade
```

## rosa download openshift-client {id="_rosa_download_openshift-client"}
Download OpenShift client tools

```bash title="Example usage"
# Download oc client tools
  rosa download oc
```

## rosa download rosa-client {id="_rosa_download_rosa-client"}
Download ROSA client tools

```bash title="Example usage"
# Download rosa client tools
  rosa download rosa
```

## rosa edit addon {id="_rosa_edit_addon"}
Edit add-on installation parameters on cluster

```bash title="Example usage"
# Edit the parameters of the Red Hat OpenShift logging operator add-on installation
  rosa edit addon --cluster=mycluster cluster-logging-operator
```

## rosa edit autoscaler {id="_rosa_edit_autoscaler"}
Edit the autoscaler of a cluster

```bash title="Example usage"
# Interactively edit an autoscaler to a cluster named "mycluster"
  rosa edit autoscaler --cluster=mycluster --interactive

# Edit a cluster-autoscaler to skip nodes with local storage
  rosa edit autoscaler --cluster=mycluster --skip-nodes-with-local-storage

# Edit a cluster-autoscaler with log verbosity of '3'
  rosa edit autoscaler --cluster=mycluster --log-verbosity 3

# Edit a cluster-autoscaler with total CPU constraints
  rosa edit autoscaler --cluster=mycluster --min-cores 10 --max-cores 100
```

## rosa edit cluster {id="_rosa_edit_cluster"}
Edit cluster

```bash title="Example usage"
# Edit a cluster named "mycluster" to make it private
  rosa edit cluster -c mycluster --private

# Edit all options interactively
  rosa edit cluster -c mycluster --interactive
```

## rosa edit image-mirror {id="_rosa_edit_image-mirror"}
Edit image mirror for a cluster

```bash title="Example usage"
# Update mirrors for image mirror with ID "abc123" on cluster "mycluster"
  rosa edit image-mirror --cluster=mycluster abc123 \
    --mirrors=mirror.corp.com/team,backup.corp.com/team,new-mirror.corp.com/team

# Alternative: using the --id flag
  rosa edit image-mirror --cluster=mycluster --id=abc123 \
    --mirrors=mirror.corp.com/team,backup.corp.com/team,new-mirror.corp.com/team
```

## rosa edit ingress {id="_rosa_edit_ingress"}
Edit a cluster ingress (load balancer)

```bash title="Example usage"
# Make additional ingress with ID 'a1b2' private on a cluster named 'mycluster'
  rosa edit ingress --private --cluster=mycluster a1b2

# Update the router selectors for the additional ingress with ID 'a1b2'
  rosa edit ingress --label-match=foo=bar --cluster=mycluster a1b2

# Update the default ingress using the sub-domain identifier
  rosa edit ingress --private=false --cluster=mycluster apps

# Update the load balancer type of the apps2 ingress 
  rosa edit ingress --lb-type=nlb --cluster=mycluster apps2
```

## rosa edit kubeletconfig {id="_rosa_edit_kubeletconfig"}
Edit a kubeletconfig for a cluster

```bash title="Example usage"
# Edit a KubeletConfig to have a pod-pids-limit of 10000
  rosa edit kubeletconfig --cluster=mycluster --pod-pids-limit=10000

# Edit a KubeletConfig named 'bar' to have a pod-pids-limit of 10000
  rosa edit kubeletconfig --cluster=mycluster --name=bar --pod-pids-limit=10000
```

## rosa edit machinepool {id="_rosa_edit_machinepool"}
Edit machine pool

```bash title="Example usage"
# Set 4 replicas on machine pool 'mp1' on cluster 'mycluster'
  rosa edit machinepool --replicas=4 --cluster=mycluster mp1

# Enable autoscaling and Set 3-5 replicas on machine pool 'mp1' on cluster 'mycluster'
  rosa edit machinepool --enable-autoscaling --min-replicas=3 --max-replicas=5 --cluster=mycluster mp1

# Set the node drain grace period to 1 hour on machine pool 'mp1' on cluster 'mycluster'
  rosa edit machinepool --node-drain-grace-period="1 hour" --cluster=mycluster mp1
```

## rosa edit tuning-configs {id="_rosa_edit_tuning-configs"}
Edit tuning config

```bash title="Example usage"
# Update the tuning config with name 'tuning-1' with the spec defined in file1
  rosa edit tuning-config --cluster=mycluster tuning-1 --spec-path file1
```

## rosa grant user {id="_rosa_grant_user"}
Grant user access to cluster

```bash title="Example usage"
# Add cluster-admin role to a user
  rosa grant user cluster-admin --user=myusername --cluster=mycluster

# Grant dedicated-admins role to a user
  rosa grant user dedicated-admin --user=myusername --cluster=mycluster
```

## rosa init {id="_rosa_init"}
Applies templates to support Red Hat OpenShift Service on AWS

```bash title="Example usage"
# Configure your AWS account to allow IAM (non-STS) ROSA clusters
  rosa init

# Configure a new AWS account using pre-existing OCM credentials
  rosa init --token=$OFFLINE_ACCESS_TOKEN
```

## rosa install addon {id="_rosa_install_addon"}
Install add-ons on cluster

```bash title="Example usage"
# Add the CodeReady Workspaces add-on installation to the cluster
  rosa install addon --cluster=mycluster codeready-workspaces
```

## rosa link ocm-role {id="_rosa_link_ocm-role"}
Link OCM role to specific OCM organization.

```bash title="Example usage"
# Link OCM role
  rosa link ocm-role --role-arn arn:aws:iam::123456789012:role/ManagedOpenshift-OCM-Role
```

## rosa link user-role {id="_rosa_link_user-role"}
Link user role to specific OCM account.

```bash title="Example usage"
# Link user roles
  rosa link user-role --role-arn arn:aws:iam::{accountid}:role/{prefix}-User-{username}-Role
```

## rosa list access-request {id="_rosa_list_access-request"}
List Access Requests

```bash title="Example usage"
# List all Access Requests for cluster 'foo'
  rosa list access-request --cluster foo
```

## rosa list account-roles {id="_rosa_list_account-roles"}
List account roles and policies

```bash title="Example usage"
# List all account roles
  rosa list account-roles
```

## rosa list addons {id="_rosa_list_addons"}
List add-on installations

```bash title="Example usage"
# List all add-on installations on a cluster named "mycluster"
  rosa list addons --cluster=mycluster
```

## rosa list break-glass-credentials {id="_rosa_list_break-glass-credentials"}
List break glass credential

```bash title="Example usage"
# List all break glass credentials for a cluster named 'mycluster'"
  rosa list break-glass-credentials -c mycluster
```

## rosa list clusters {id="_rosa_list_clusters"}
List clusters

```bash title="Example usage"
# List all clusters
  rosa list clusters
```

## rosa list dns-domain {id="_rosa_list_dns-domain"}
List DNS Domains

```bash title="Example usage"
# List all DNS Domains tied to your organization ID"
  rosa list dns-domain
```

## rosa list external-auth-providers {id="_rosa_list_external-auth-providers"}
List external authentication provider

```bash title="Example usage"
# List all external authentication providers for a cluster named 'mycluster'"
  rosa list external-auth-provider -c mycluster
```

## rosa list gates {id="_rosa_list_gates"}
List available OCP Gates

```bash title="Example usage"
# List all OCP gates for OCP version
  rosa list gates --version 4.9

# List all STS gates for OCP version
  rosa list gates --gate sts --version 4.9

# List all OCP gates for OCP version
  rosa list gates --gate ocp --version 4.9

# List available gates for cluster upgrade version
  rosa list gates -c <cluster_id> --version 4.9.15
```

## rosa list iamserviceaccounts {id="_rosa_list_iamserviceaccounts"}
List IAM roles for Kubernetes service accounts

```bash title="Example usage"
# List IAM roles for service accounts
  rosa list iamserviceaccounts --cluster my-cluster
```

## rosa list idps {id="_rosa_list_idps"}
List cluster identity providers (IDPs)

```bash title="Example usage"
# List all identity providers on a cluster named "mycluster"
  rosa list idps --cluster=mycluster
```

## rosa list image-mirrors {id="_rosa_list_image-mirrors"}
List cluster image mirrors

```bash title="Example usage"
# List all image mirrors on a cluster named "mycluster"
  rosa list image-mirrors --cluster=mycluster
```

## rosa list ingresses {id="_rosa_list_ingresses"}
List cluster ingresses

```bash title="Example usage"
# List all routes on a cluster named "mycluster"
  rosa list ingresses --cluster=mycluster
```

## rosa list instance-types {id="_rosa_list_instance-types"}
List Instance types

```bash title="Example usage"
# List all instance types
  rosa list instance-types
```

## rosa list kubeletconfigs {id="_rosa_list_kubeletconfigs"}
List kubeletconfigs

```bash title="Example usage"
# List the kubeletconfigs for cluster 'foo'
  rosa list kubeletconfig --cluster foo
```

## rosa list log-forwarders {id="_rosa_list_log-forwarders"}
List cluster log forwarders

```bash title="Example usage"
# List all log forwarders on a cluster named "mycluster":
  rosa list log-forwarders --cluster=mycluster
```

## rosa list machinepools {id="_rosa_list_machinepools"}
List cluster machine pools

```bash title="Example usage"
# List all machine pools on a cluster named "mycluster"
  rosa list machinepools --cluster=mycluster
  
# List machine pools showing all information
  rosa list machinepools --cluster=mycluster --all
```

## rosa list ocm-roles {id="_rosa_list_ocm-roles"}
List the OCM roles

```bash title="Example usage"
# List all ocm roles
  rosa list ocm-roles
```

## rosa list oidc-config {id="_rosa_list_oidc-config"}
List OIDC Configuration resources

```bash title="Example usage"
# List all OIDC Configurations tied to your organization ID"
  rosa list oidc-config
```

## rosa list oidc-providers {id="_rosa_list_oidc-providers"}
List OpenID Connect (OIDC) providers

```bash title="Example usage"
# List all oidc providers
  rosa list oidc-providers
```

## rosa list operator-roles {id="_rosa_list_operator-roles"}
List operator roles and policies

```bash title="Example usage"
# List all operator roles
  rosa list operator-roles
```

## rosa list regions {id="_rosa_list_regions"}
List available regions

```bash title="Example usage"
# List all available regions
  rosa list regions
```

## rosa list tuning-configs {id="_rosa_list_tuning-configs"}
List tuning configs

```bash title="Example usage"
# List all tuning configuration for a cluster named 'mycluster'"
  rosa list tuning-configs -c mycluster
```

## rosa list user-roles {id="_rosa_list_user-roles"}
List user roles

```bash title="Example usage"
# List all user roles
  rosa list user-roles
```

## rosa list users {id="_rosa_list_users"}
List cluster users

```bash title="Example usage"
# List all users on a cluster named "mycluster"
  rosa list users --cluster=mycluster
```

## rosa list versions {id="_rosa_list_versions"}
List available versions

```bash title="Example usage"
# List all OpenShift versions
  rosa list versions
```

## rosa login {id="_rosa_login"}
Log in to your Red Hat account

```bash title="Example usage"
# Login to the OpenShift API with an existing token generated from https://console.redhat.com/openshift/token/rosa
  rosa login --token=$OFFLINE_ACCESS_TOKEN
```

## rosa logs {id="_rosa_logs"}
Show installation or uninstallation logs for a cluster

```bash title="Example usage"
# Show install logs for a cluster named 'mycluster'
  rosa logs install --cluster=mycluster

# Show uninstall logs for a cluster named 'mycluster'
  rosa logs uninstall --cluster=mycluster
```

## rosa logs install {id="_rosa_logs_install"}
Show cluster installation logs

```bash title="Example usage"
# Show last 100 install log lines for a cluster named "mycluster"
  rosa logs install mycluster --tail=100

# Show install logs for a cluster using the --cluster flag
  rosa logs install --cluster=mycluster
```

## rosa logs uninstall {id="_rosa_logs_uninstall"}
Show cluster uninstallation logs

```bash title="Example usage"
# Show last 100 uninstall log lines for a cluster named "mycluster"
  rosa logs uninstall mycluster --tail=100

# Show uninstall logs for a cluster using the --cluster flag
  rosa logs uninstall --cluster=mycluster
```

## rosa register oidc-config {id="_rosa_register_oidc-config"}
Registers unmanaged OIDC config with Openshift Clusters Manager.

```bash title="Example usage"
# Register OIDC config
  rosa register oidc-config
```

## rosa revoke break-glass-credentials {id="_rosa_revoke_break-glass-credentials"}
Revoke break glass credentials

```bash title="Example usage"
# Revoke all break glass credentials
  rosa revoke break-glass-credentials --cluster=mycluster
```

## rosa revoke user {id="_rosa_revoke_user"}
Revoke role from users

```bash title="Example usage"
# Revoke cluster-admin role from a user
  rosa revoke user cluster-admins --user=myusername --cluster=mycluster

# Revoke dedicated-admin role from a user
  rosa revoke user dedicated-admins --user=myusername --cluster=mycluster
```

## rosa uninstall addon {id="_rosa_uninstall_addon"}
Uninstall add-on from cluster

```bash title="Example usage"
# Remove the CodeReady Workspaces add-on installation from the cluster
  rosa uninstall addon --cluster=mycluster codeready-workspaces
```

## rosa unlink ocm-role {id="_rosa_unlink_ocm-role"}
Unlink the OCM role from a specific OCM organization

```bash title="Example usage"
# Unlink ocm role
  rosa unlink ocm-role --role-arn arn:aws:iam::123456789012:role/ManagedOpenshift-OCM-Role
```

## rosa unlink user-role {id="_rosa_unlink_user-role"}
Unlink the user role from a specific OCM account

```bash title="Example usage"
# Unlink user role
  rosa unlink user-role --role-arn arn:aws:iam::{accountid}:role/{prefix}-User-{username}-Role
```

## rosa upgrade account-roles {id="_rosa_upgrade_account-roles"}
Upgrade account-wide IAM roles to the latest version.

```bash title="Example usage"
# Upgrade account roles for ROSA STS clusters
  rosa upgrade account-roles
```

## rosa upgrade cluster {id="_rosa_upgrade_cluster"}
Upgrade cluster

```bash title="Example usage"
# Interactively schedule an upgrade on the cluster named "mycluster"
  rosa upgrade cluster --cluster=mycluster --interactive

# Schedule a cluster upgrade within the hour
  rosa upgrade cluster -c mycluster --version 4.12.20

# Check if any gates need to be acknowledged prior to attempting an upgrade
  rosa upgrade cluster -c mycluster --version 4.12.20 --dry-run
```

## rosa upgrade machinepool {id="_rosa_upgrade_machinepool"}
Upgrade machinepool

```bash title="Example usage"
# Interactively schedule an upgrade on the cluster named "mycluster"" for a machinepool named "np1"
  rosa upgrade machinepool np1 --cluster=mycluster --interactive

# Schedule a machinepool upgrade within the hour
  rosa upgrade machinepool np1 -c mycluster --version 4.12.20
```

## rosa upgrade operator-roles {id="_rosa_upgrade_operator-roles"}
Upgrade operator IAM roles for a cluster.

```bash title="Example usage"
# Upgrade cluster-specific operator IAM roles
  rosa upgrade operators-roles
```

## rosa upgrade roles {id="_rosa_upgrade_roles"}
Upgrade cluster-specific IAM roles to the latest version.

```bash title="Example usage"
# Upgrade cluster roles for ROSA STS clusters
  rosa upgrade roles -c <cluster_key>
```

## rosa verify network {id="_rosa_verify_network"}
Verify Virtual Private Cloud (VPC) subnets are configured correctly

```bash title="Example usage"
# Verify two subnets
  rosa verify network --subnet-ids subnet-03046a9b92b5014fb,subnet-03046a9c92b5014fb
```

## rosa verify openshift-client {id="_rosa_verify_openshift-client"}
Verify OpenShift client tools

```bash title="Example usage"
# Verify oc client tools
  rosa verify oc
```

## rosa verify permissions {id="_rosa_verify_permissions"}
Verify AWS permissions are ok for non-AWS Security Token Service (STS) cluster install

```bash title="Example usage"
# Verify AWS permissions are configured correctly
  rosa verify permissions

# Verify AWS permissions in a different region
  rosa verify permissions --region=us-west-2
```

## rosa verify quota {id="_rosa_verify_quota"}
Verify AWS quota is ok for cluster install

```bash title="Example usage"
# Verify AWS quotas are configured correctly
  rosa verify quota

# Verify AWS quotas in a different region
  rosa verify quota --region=us-west-2
```

## rosa verify rosa-client {id="_rosa_verify_rosa-client"}
Verify ROSA client tools

```bash title="Example usage"
# Verify rosa client tools
  rosa verify rosa
```

## rosa whoami {id="_rosa_whoami"}
Displays user account information

```bash title="Example usage"
# Displays user information
  rosa whoami
```
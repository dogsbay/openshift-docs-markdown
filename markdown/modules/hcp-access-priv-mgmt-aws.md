{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing a private hosted cluster on {{ aws_short }} {id="hcp-access-private-hc-aws_{{ context }}"}

After you create a private hosted cluster, you can access it by using the command-line interface (CLI). {._abstract}

**Procedure**

1.  Find the private IPs of nodes by entering the following command:
    ```terminal
    $ aws ec2 describe-instances \
      --filter="Name=tag:kubernetes.io/cluster/<infra_id>,Values=owned" \
      | jq '.Reservations[] | .Instances[] | select(.PublicDnsName=="") \
      | .PrivateIpAddress'
    ```
1.  Create a `kubeconfig` file for the hosted cluster that you can copy to a node by entering the following command:
    ```terminal
    $ hcp create kubeconfig > <hosted_cluster_kubeconfig>
    ```
1.  To SSH into one of the nodes through the bastion, enter the following command:
    ```terminal
    $ ssh -o ProxyCommand="ssh ec2-user@<bastion_ip> \
      -W %h:%p" core@<node_ip>
    ```
1.  From the SSH shell, copy the `kubeconfig` file contents to a file on the node by entering the following command:
    ```terminal
    $ mv <path_to_kubeconfig_file> <new_file_name>
    ```
1.  Export the `kubeconfig` file by entering the following command:
    ```terminal
    $ export KUBECONFIG=<path_to_kubeconfig_file>
    ```
1.  Observe the hosted cluster status by entering the following command:
    ```terminal
    $ oc get clusteroperators clusterversion
    ```
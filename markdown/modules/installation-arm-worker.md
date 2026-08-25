{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# ARM template for worker machines {id="installation-arm-worker_{{ context }}"}

Use the `06_workers.json` Azure Resource Manager (ARM) template to deploy worker machines for your {{ product_title }} cluster. {._abstract}

<details>
<summary>`06_workers.json` ARM template</summary>

```json
{%- if not ash %}
```json
{
  "$schema" : "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion" : "1.0.0.0",
  "parameters" : {
    "baseName" : {
      "type" : "string",
      "minLength" : 1,
      "metadata" : {
        "description" : "Base name to be used in resource names (usually the cluster's Infra ID)"
      }
    },
    "vnetBaseName": {
      "type": "string",
      "defaultValue": "",
      "metadata" : {
        "description" : "The specific customer vnet's base name (optional)"
      }
    },
    "workerIgnition" : {
      "type" : "string",
      "metadata" : {
        "description" : "Ignition content for the worker nodes"
      }
    },
    "numberOfNodes" : {
      "type" : "int",
      "defaultValue" : 3,
      "minValue" : 2,
      "maxValue" : 30,
      "metadata" : {
        "description" : "Number of OpenShift compute nodes to deploy"
      }
    },
    "sshKeyData" : {
      "type" : "securestring",
      "defaultValue" : "Unused",
      "metadata" : {
        "description" : "Unused"
      }
    },
    "nodeVMSize" : {
      "type" : "string",
      "defaultValue" : "Standard_D4s_v3",
      "metadata" : {
        "description" : "The size of the each Node Virtual Machine"
      }
    },
    "hyperVGen": {
      "type": "string",
      "metadata": {
        "description": "VM generation image to use"
      },
      "defaultValue": "V2",
      "allowedValues": [
        "V1",
        "V2"
      ]
    }
  },
  "variables" : {
    "location" : "[resourceGroup().location]",
    "virtualNetworkName" : "[concat(if(not(empty(parameters('vnetBaseName'))), parameters('vnetBaseName'), parameters('baseName')), '-vnet')]",
    "virtualNetworkID" : "[resourceId('Microsoft.Network/virtualNetworks', variables('virtualNetworkName'))]",
    "nodeSubnetName" : "[concat(if(not(empty(parameters('vnetBaseName'))), parameters('vnetBaseName'), parameters('baseName')), '-worker-subnet')]",
    "nodeSubnetRef" : "[concat(variables('virtualNetworkID'), '/subnets/', variables('nodeSubnetName'))]",
    "infraLoadBalancerName" : "[parameters('baseName')]",
    "sshKeyPath" : "/home/capi/.ssh/authorized_keys",
    "identityName" : "[concat(parameters('baseName'), '-identity')]",
    "galleryName": "[concat('gallery_', replace(parameters('baseName'), '-', '_'))]",
    "imageName" : "[concat(parameters('baseName'), if(equals(parameters('hyperVGen'), 'V2'), '-gen2', ''))]",
    "copy" : [
      {
        "name" : "vmNames",
        "count" :  "[parameters('numberOfNodes')]",
        "input" : "[concat(parameters('baseName'), '-worker-', variables('location'), '-', copyIndex('vmNames', 1))]"
      }
    ]
  },
  "resources" : [
    {
      "apiVersion" : "2019-05-01",
      "name" : "[concat('node', copyIndex())]",
      "type" : "Microsoft.Resources/deployments",
      "copy" : {
        "name" : "nodeCopy",
        "count" : "[length(variables('vmNames'))]"
      },
      "properties" : {
        "mode" : "Incremental",
        "template" : {
          "$schema" : "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
          "contentVersion" : "1.0.0.0",
          "resources" : [
            {
              "apiVersion" : "2018-06-01",
              "type" : "Microsoft.Network/networkInterfaces",
              "name" : "[concat(variables('vmNames')[copyIndex()], '-nic')]",
              "location" : "[variables('location')]",
              "properties" : {
                "ipConfigurations" : [
                  {
                    "name" : "pipConfig",
                    "properties" : {
                      "privateIPAllocationMethod" : "Dynamic",
                      "subnet" : {
                        "id" : "[variables('nodeSubnetRef')]"
                      }
                    }
                  }
                ]
              }
            },
            {
              "apiVersion" : "2018-06-01",
              "type" : "Microsoft.Compute/virtualMachines",
              "name" : "[variables('vmNames')[copyIndex()]]",
              "location" : "[variables('location')]",
              "tags" : {
                "kubernetes.io-cluster-ffranzupi": "owned"
              },
              "identity" : {
                "type" : "userAssigned",
                "userAssignedIdentities" : {
                  "[resourceID('Microsoft.ManagedIdentity/userAssignedIdentities/', variables('identityName'))]" : {}
                }
              },
              "dependsOn" : [
                "[concat('Microsoft.Network/networkInterfaces/', concat(variables('vmNames')[copyIndex()], '-nic'))]"
              ],
              "properties" : {
                "hardwareProfile" : {
                  "vmSize" : "[parameters('nodeVMSize')]"
                },
                "osProfile" : {
                  "computerName" : "[variables('vmNames')[copyIndex()]]",
                  "adminUsername" : "capi",
                  "adminPassword" : "NotActuallyApplied!",
                  "customData" : "[parameters('workerIgnition')]",
                  "linuxConfiguration" : {
                    "disablePasswordAuthentication" : false
                  }
                },
                "storageProfile" : {
                  "imageReference": {
                    "id": "[resourceId('Microsoft.Compute/galleries/images', variables('galleryName'), variables('imageName'))]"
                  },
                  "osDisk" : {
                    "name": "[concat(variables('vmNames')[copyIndex()],'_OSDisk')]",
                    "osType" : "Linux",
                    "createOption" : "FromImage",
                    "managedDisk": {
                      "storageAccountType": "Premium_LRS"
                    },
                    "diskSizeGB": 128
                  }
                },
                "networkProfile" : {
                  "networkInterfaces" : [
                    {
                      "id" : "[resourceId('Microsoft.Network/networkInterfaces', concat(variables('vmNames')[copyIndex()], '-nic'))]",
                      "properties": {
                        "primary": true
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  ]
}
```
{% endif %}
{% if ash %}
```json
{
  "$schema" : "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion" : "1.0.0.0",
  "parameters" : {
    "baseName" : {
      "type" : "string",
      "minLength" : 1,
      "metadata" : {
        "description" : "Base name to be used in resource names (usually the cluster's Infra ID)"
      }
    },
    "workerIgnition" : {
      "type" : "string",
      "metadata" : {
        "description" : "Ignition content for the worker nodes"
      }
    },
    "numberOfNodes" : {
      "type" : "int",
      "defaultValue" : 3,
      "minValue" : 2,
      "maxValue" : 30,
      "metadata" : {
        "description" : "Number of OpenShift compute nodes to deploy"
      }
    },
    "sshKeyData" : {
      "type" : "securestring",
      "metadata" : {
        "description" : "SSH RSA public key file as a string"
      }
    },
    "diagnosticsStorageAccountName": {
      "type": "string"
    },
    "nodeVMSize" : {
      "type" : "string",
      "defaultValue" : "Standard_DS4_v2",
      "metadata" : {
        "description" : "The size of the each Node Virtual Machine"
      }
    }
  },
  "variables" : {
    "location" : "[resourceGroup().location]",
    "virtualNetworkName" : "[concat(parameters('baseName'), '-vnet')]",
    "virtualNetworkID" : "[resourceId('Microsoft.Network/virtualNetworks', variables('virtualNetworkName'))]",
    "nodeSubnetName" : "[concat(parameters('baseName'), '-worker-subnet')]",
    "nodeSubnetRef" : "[concat(variables('virtualNetworkID'), '/subnets/', variables('nodeSubnetName'))]",
    "masterLoadBalancerName" : "[concat(parameters('baseName'))]",
    "outboundBackendPoolName" : "[concat(parameters('baseName'), '-outbound')]",
    "sshKeyPath" : "/home/core/.ssh/authorized_keys",
    "imageName" : "[parameters('baseName')]",
    "masterAvailabilitySetName" : "[concat(parameters('baseName'), '-cluster')]",
    "numberOfNodes" : "[parameters('numberOfNodes')]",
    "vms" : {
      "copy" : [
        {
        "name" : "vmNames",
        "count" :  "[parameters('numberOfNodes')]",
        "input" : {
            "name" : "[concat(parameters('baseName'), string('-worker-'), string(copyIndex('vmNames')))]"
        }
      }
    ]
  }
  },
  "resources" : [
    {
      "name": "[parameters('diagnosticsStorageAccountName')]",
      "type": "Microsoft.Storage/storageAccounts",
      "apiVersion": "2017-10-01",
      "location": "[variables('location')]",
      "properties": {},
      "kind": "Storage",
      "sku": {
        "name": "Standard_LRS"
      }
    },
    {
      "apiVersion" : "2017-10-01",
      "type" : "Microsoft.Network/networkInterfaces",
      "location": "[variables('location')]",
      "copy" : {
        "name" : "nicCopy",
        "count" : "[variables('numberOfNodes')]"
      },
      "name" : "[concat(variables('vms').vmNames[copyIndex()].name, '-nic')]",
      "properties" : {
        "ipConfigurations" : [
          {
            "name" : "pipConfig",
            "properties" : {
              "privateIPAllocationMethod" : "Dynamic",
              "subnet" : {
                "id" : "[variables('nodeSubnetRef')]"
              },
              "loadBalancerBackendAddressPools" : [
                {
                  "id" : "[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/providers/Microsoft.Network/loadBalancers/', variables('masterLoadBalancerName'), '/backendAddressPools/', variables('outboundBackendPoolName'))]"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "apiVersion" : "2017-12-01",
      "type" : "Microsoft.Compute/virtualMachines",
      "location" : "[variables('location')]",
      "copy" : {
        "name" : "vmCopy",
        "count" : "[variables('numberOfNodes')]"
      },
      "name" : "[variables('vms').vmNames[copyIndex()].name]",
      "dependsOn" : [
        "[concat('Microsoft.Network/networkInterfaces/', concat(variables('vms').vmNames[copyIndex()].name, '-nic'))]",
        "[concat('Microsoft.Storage/storageAccounts/', parameters('diagnosticsStorageAccountName'))]"
      ],
      "properties" : {
        "availabilitySet": {
          "id": "[resourceId('Microsoft.Compute/availabilitySets',variables('masterAvailabilitySetName'))]"
        },
        "hardwareProfile" : {
          "vmSize" : "[parameters('nodeVMSize')]"
        },
        "osProfile" : {
          "computerName" : "[variables('vms').vmNames[copyIndex()].name]",
          "adminUsername" : "core",
          "customData" : "[parameters('workerIgnition')]",
          "linuxConfiguration" : {
            "disablePasswordAuthentication" : true,
            "ssh" : {
              "publicKeys" : [
                {
                  "path" : "[variables('sshKeyPath')]",
                  "keyData" : "[parameters('sshKeyData')]"
                }
              ]
            }
          }
        },
        "storageProfile" : {
          "imageReference": {
            "id": "[resourceId('Microsoft.Compute/images', variables('imageName'))]"
          },
          "osDisk" : {
            "name": "[concat(variables('vms').vmNames[copyIndex()].name,'_OSDisk')]",
            "osType" : "Linux",
            "createOption" : "FromImage",
            "managedDisk": {
              "storageAccountType": "Standard_LRS"
            },
            "diskSizeGB": 128
          }
        },
        "networkProfile" : {
          "networkInterfaces" : [
            {
              "id" : "[resourceId('Microsoft.Network/networkInterfaces', concat(variables('vms').vmNames[copyIndex()].name, '-nic'))]",
              "properties": {
                "primary": true
              }
            }
          ]
        },
        "diagnosticsProfile": {
          "bootDiagnostics": {
            "enabled": true,
            "storageUri": "[reference(resourceId('Microsoft.Storage/storageAccounts', parameters('diagnosticsStorageAccountName'))).primaryEndpoints.blob]"
          }
        }
      }
    }
  ]
}
```
{%- endif %}
```
</details>

{% if context == "installing-azure-stack-hub-user-infra" %}
{%- set ash = false -%}
{% endif %}
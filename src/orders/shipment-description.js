/** @format */

const paperDescriptions = {
	cencelled: {
		key: "shipment.description.paper.cancelled",
		defaultValue: "Paper Shipment Cancelled",
	},
	shipped: {
		key: "shipment.description.paper.shipped",
		defaultValue: "Paper Shipped",
	},
	undelivered: {
		key: "shipment.description.paper.undelivered",
		defaultValue: "Paper Shipment Not Delivered",
	},
};

const printerDescriptions = {
	kit: {
		cancelled: {
			key: "shipment.descriptions.printer.kit.cancelled",
			defaultValue: "Printer Shipment Cancelled",
		},
		shipped: {
			key: "shipment.descriptions.printer.shipped",
			defaultValue: "Printer Shipped",
		},
		undelivered: {
			key: "shipment.description.printer.undelivered",
			defaultValue: "Printer Shipment Not Delivered",
		},
	},
	welcomeKit: {
		cancelled: {
			key: "shipment.descriptions.printer.welcome-kit.cancelled",
			defaultValue: "Printer Welcome kit Shipment Cancelled",
		},
		shipped: {
			key: "shipment.descriptions.printer.welcome-kit.shipped",
			defaultValue: "Printer Welcome Kit Shipment Shipped",
		},
		undelivered: {
			key: "shipment.description.printer.welcome-kit.undelivered",
			defaultValue: "Printer Welcome Kit Shipment Not Delivered",
		},
	},
};

const cartridgeDescriptions = {
	kit: (color, quantity, isPlural) => ({
		cancelled: {
			key:
				`shipment.descriptions.cartridge.kit.cancelled` +
				(isPlural ? "-plural" : ""),
			defaultValue: `${quantity} ${colors[color]} Ink Cartridge${
				isPlural ? "s" : ""
			} Shipment Cancelled`,
		},
		shipped: {
			key:
				`shipment.description.cartridge.kit.shipped` +
				(isPlural ? "-plural" : ""),
			defaultValue: `${quantity} ${colors[color]} Ink Cartridge${
				isPlural ? "s" : ""
			} Shipped`,
		},
		undelivered: {
			key:
				`shipment.description.cartridge.kit.undelivered` +
				(isPlural ? "-plural" : ""),
			defaultValue: `${quantity} ${colors[color]} Ink Cartridge${
				isPlural ? "s" : ""
			} Shipment  Not Delivered`,
		},
	}),
	welcomeKit: {
		cancelled: {
			key: `shipment.descriptions.cartridge.welcome-kit.cancelled`,
			defaultValue: `Ink Welcome Kit Shipment Cancelled`,
		},
		shipped: {
			key: `shipment.description.cartridge.welcome-kit.shipped`,
			defaultValue: `Ink Welcome Kit Shipment Shipped`,
		},
		undelivered: {
			key: `shipment.description.cartridge.welcome-kit.undelivered`,
			defaultValue: `Ink Welcome Kit Shipment Not Delivered`,
		},
	},
};

function getShipmentDescription({
	productType,
	orderType,
	status,
	quantity,
	colorCode,
}) {
	const emptyDescription = {
		key: "",
		defaultValue: "",
	};

	if (productType === "instantpaper") {
		return paperDescriptions[status] || emptyDescription;
	}

	if (productType === "hardware") {
		return printerDescriptions[orderType]?.[status] || emptyDescription;
	}

	if (productType === "ink") {
		if (orderType === "kit") {
			return (
				cartridgeDescriptions.kit(colorCode, quantity, quantity > 1)[status] ||
				emptyDescription
			);
		}
		return cartridgeDescriptions[orderType]?.[status] || emptyDescription;
	}

	return emptyDescription;
}

module.exports = { getShipmentDescription };
